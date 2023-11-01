import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import DataMissionsSlice from './features/DataMissionsSlice'
import DataRocketsSlice from './features/DataRocketsSlice'

const rootReducer = combineReducers({
    missions: DataMissionsSlice,
    rockets: DataRocketsSlice
  })

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// import { configureStore } from '@reduxjs/toolkit'
// import DataRocketsSlice from './features/DataRocketsSlice'
// import DataDragonsSlice from './features/DataDragonsSlice'
// import DataMissionsSlice from './features/DataMissionsSlice'

// export const store = configureStore({
//   reducer: {
//     rockets: DataRocketsSlice,
//     dragons: DataDragonsSlice,
//     missions: DataMissionsSlice
//   },
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch