import { axios } from '@/http'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Comment, News } from '../types'

const fetchCommentsHelper = async (news: News | Comment) => {
    if (news.kids && news.kids.length > 0) {
        const comments = await Promise.all(
            news.kids.map(async (entityItem) => {
                const { data } = await axios.get(`/v0/item/${entityItem}.json?print=pretty`)
                return data
            })
        )
        return Promise.all(comments.map(async (childData) => ({
            ...childData,
            childComments: await fetchCommentsHelper(childData)
        })))
    }
    return []
}

export const fetchComments = createAsyncThunk<Comment[], number>(
    'fetchComments',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.get(`/v0/item/${id}.json?print=pretty`)
            return fetchCommentsHelper(data)
        } catch {
            return thunkAPI.rejectWithValue('Ошибка загрузки')
        }
    }
)
