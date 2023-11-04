import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface datamission {
    id: string
    name: string
    image: string
    attempts: number
    successes: number
    join?: boolean
}

interface getdatamissions {
    loading: boolean
    error: boolean | null
    datamissions: datamission[]
}

export const getDataMissions = createAsyncThunk(
  'getDataMissions',
  async (_, {rejectWithValue}) => {
    const response = await fetch('https://api.spacexdata.com/v4/launchpads')
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
    datamissions: []
} as getdatamissions

const DataMissionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setJoinMission: (state, action) => {
      state.datamissions.map((mission: datamission) => {
        mission.id === action.payload ? mission.join = !mission.join : mission
      })}
  },
  extraReducers: (builder) => {
    builder.addCase(getDataMissions.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getDataMissions.fulfilled, (state, action) => {
        state.loading = false 
        const wholedata: any[] = action.payload
        const outdata: datamission[] = []
        wholedata.forEach(element => {
            outdata.push(
                {
                    id: element.id,
                    name: element.name,
                    image: element.images.large[0],
                    attempts: element.launch_attempts,
                    successes: element.launch_successes
                }
            )
        })
        state.datamissions = outdata
    }),
    builder.addCase(getDataMissions.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false,
        state.error = action.payload
    })
  },
})

export default DataMissionsSlice.reducer

export const { setJoinMission } = DataMissionsSlice.actions;