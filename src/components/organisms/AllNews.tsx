import React from 'react'
import { newsList } from '@/model/news/thunk'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NewsList } from '../molecules'

export const AllNews = () => {
    const news = useAppSelector((state) => state.news.dataNews)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(newsList())
        const interval = setInterval(() => {
            dispatch(newsList())
        }, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <NewsList news={news} />
    )
}