import React from 'react'
import { useParams } from 'react-router-dom'

import { toNormalDateFull } from '@/helpers'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { fetchComments } from '@/model/comment/thunk'
import { fetchSingleNews } from '@/model/news/thunk'
import { clearComments } from '@/model/comment/slice'
import { clearNews } from '@/model/news/slice'

import { Loader } from '@/ui'
import { CommentsList } from '../molecules'

import styles from './SingleNews.module.css'

export const SingleNews = () => {
    const comments = useAppSelector((state) => state.comments.comments)

    const { loading, error, news } = useAppSelector(state => state.news)

    const { newsId } = useParams<{ newsId: string }>()
    const dispatch = useAppDispatch()
    const id = Number(newsId)

    React.useEffect(() => {
        dispatch(fetchSingleNews(id))
        dispatch(fetchComments(id))
        return () => {
            dispatch(clearComments())
            dispatch(clearNews())
        }
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.list_item}>
            {loading ? <Loader /> : <>
                {news?.url &&
                    <a href={news?.url} rel="noreferrer" target="_blank">{news?.url}</a>
                }
                <h3>{news?.title}</h3>
                <span className={styles.author_wrapper}>
                    Author:
                    <p className={styles.author}>
                        {news?.by}
                    </p>
                </span>
                <p className={styles.date}>
                    {toNormalDateFull(news?.time as number)}
                </p>
                <CommentsList
                    id={id}
                    news={news}
                    comments={comments}
                />
            </>}
        </div>
    )
}
