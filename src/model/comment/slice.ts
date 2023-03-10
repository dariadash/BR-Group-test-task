import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Comment } from '../types'
import { fetchComments } from './thunk'

type CommentsState = {
    comments: Comment[],
    loading: boolean,
    error: null
}

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null
}

export const commentSlice = createSlice({
    name: 'commentsList',
    initialState,
    reducers: {
        clearComments: (state) => {
            state.comments = []
        },
    },
    extraReducers: {
        [fetchComments.fulfilled.type]: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload
            state.loading = false
            state.error = null
        },
        [fetchComments.pending.type]: (state) => {
            state.loading = true
        },
        [fetchComments.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { clearComments } = commentSlice.actions

export default commentSlice.reducer