import React from 'react'
import { Link } from 'react-router-dom'

import { News } from '@/model/types'
import { toNormalDateFull } from '@/helpers'
import { useAppSelector } from '@/hooks'
import { Loader } from '@/ui'

import styles from './NewsList.module.css'

type NewsListProps = {
    news: News[]
}

export const NewsList = ({ news }: NewsListProps) => {
    const { loading, error } = useAppSelector(state => state.news)

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.list_wrapper}>
            {news.map((item, index) => (
                <div className={styles.list_item} key={index}>
                    <Link to={`/news/${item?.id}`}>{item?.title}</Link>
                    <div>
                        {item?.score} point by {item?.by}
                    </div>
                    <span>{toNormalDateFull(item?.time)}</span>
                </div>
            ))}
        </div>
    )
}
