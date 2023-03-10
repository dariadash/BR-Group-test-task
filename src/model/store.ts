import { combineReducers, configureStore } from '@reduxjs/toolkit'
import news from './news/slice'
import comments from './comment/slice'

const rootReducer = combineReducers({
    news,
    comments
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']