import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const getDataRockets = createAsyncThunk(
  'getDataRockets',
  async (_, {rejectWithValue}) => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets')
    if(!response.ok){
        return rejectWithValue(response.status)
    } else {
        const data = await response.json()
        return data
    } 
  }
)

export interface getData {
    loading: boolean
    error: string | null
    data: data[]
}

export interface data {
    name: string
    image: string
    description: string
    id: string
    selected?: boolean
}

const initialState = {
    loading: false,
    error: null,
    data: []
} as getData


const DataRocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setSelectedRocket: (state, action) => {
      const index = state.data.findIndex((rocket:data) => {
        return rocket.id === action.payload;
      });
      console.log('id: ', action.payload)
      state.data[index].selected = !state.data[index].selected
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataRockets.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getDataRockets.fulfilled, (state, action) => {
        state.loading = false 
        const wholedata: any[] = action.payload
        const outdata: data[] = []
        wholedata.forEach(element => {
            outdata.push(
                {
                    name: element.name,
                    image: element.flickr_images[0],
                    description: element.description,
                    id: element.id
                }
            )
        })
        state.data = outdata
    }),
    builder.addCase(getDataRockets.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false,
        state.error = action.payload
    })
  },
})

export default DataRocketsSlice.reducer

export const { setSelectedRocket } = DataRocketsSlice.actions;