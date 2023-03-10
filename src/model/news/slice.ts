import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { newsList, fetchSingleNews } from './thunk'
import { News } from '../types'

type NewsState = {
    dataNews: News[],
    news: null | News,
    error: null,
    loading: boolean,
}

const initialState: NewsState = {
    dataNews: [],
    news: null,
    error: null,
    loading: false,
}

export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {
        clearNews: (state) => {
            state.news = null
        }
    },
    extraReducers: {
        [newsList.fulfilled.type]: (state, action: PayloadAction<News[]>) => {
            state.loading = false
            state.error = null
            state.dataNews = action.payload
        },
        [newsList.pending.type]: (state) => {
            state.loading = true
        },
        [newsList.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [fetchSingleNews.fulfilled.type]: (state, action: PayloadAction<News>) => {
            state.loading = false
            state.error = null
            state.news = action.payload
        },
        [fetchSingleNews.pending.type]: (state) => {
            state.loading = true
        },
        [fetchSingleNews.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { clearNews } = newsSlice.actions

export default newsSlice.reducer