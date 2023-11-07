import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface getData {
    loading: boolean
    error: string | null
    data: data[]
}

export interface data {
    id: string
    name: string
    image: string
    description: string
    selected?: boolean
}

export const getDataDragons = createAsyncThunk(
  'getDataDragons',
  async (_, {rejectWithValue}) => {
    const response = await fetch('https://api.spacexdata.com/v4/dragons')
    if(!response.ok){
        return rejectWithValue(response.status)
    } else {
        const data = await response.json()
        return data
    } 
  }
)

const initialState = {
    loading: false,
    error: null,
    data: localStorage.getItem('dragons') ? JSON.parse(localStorage.getItem('dragons') || '') : []
} as getData


const DataDragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    setSelectedDragon: (state, action) => {
      state.data.map((dragon: data) => {
        dragon.id === action.payload ? dragon.selected = !dragon.selected : dragon
      })
      localStorage.setItem('dragons', JSON.stringify(state.data))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataDragons.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getDataDragons.fulfilled, (state, action) => {
        state.loading = false
        const wholedata: any[] = action.payload
        const outdata: data[] = []
        wholedata.forEach(element => {
            outdata.push(
                {
                    id: element.id,
                    name: element.name,
                    image: element.flickr_images[0],
                    description: element.description
                }
            )
        })
        state.data = localStorage.getItem('dragons') ? JSON.parse(localStorage.getItem('dragons') || '') : outdata
    }),
    builder.addCase(getDataDragons.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false,
        state.error = action.payload
    })
  },
})

export default DataDragonsSlice.reducer

export const { setSelectedDragon } = DataDragonsSlice.actions;