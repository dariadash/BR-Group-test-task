import { createAsyncThunk } from '@reduxjs/toolkit'
import { axios } from '@/http'

import { News } from '../types'


export const fetchSingleNews = createAsyncThunk(
    'fetchSingleNews',
    async (newsId: number, thunkAPI) => {
        try {
            const { data: news } = await axios.get(`/v0/item/${newsId}.json?print=pretty`)
            return news
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка загрузки')
        }
    }
)

export const newsList = createAsyncThunk(
    'newsList',
    async (_, thunkAPI) => {
        try {
            const { data: items } = await axios.get('/v0/newstories.json')
            const newsTotal: News[] = await Promise.all(
                items
                    .filter((_, index) => index < 100)
                    .map(async (item) => {
                        const { data } = await axios.get(`/v0/item/${item}.json?print=pretty`)
                        return data
                    }))
            return newsTotal
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка загрузки')
        }
    }
)
