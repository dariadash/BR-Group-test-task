import React from 'react'

import { fetchComments } from '@/model/comment/thunk'
import { Comment, News } from '@/model/types'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { Loader, Button, Icon } from '@/ui'
import { CommentBranch } from '../atoms'

import styles from './CommentsList.module.css'

type CommentsListProps = {
    id: number,
    news: News | null,
    comments: Comment[]
}

export const CommentsList = ({ id, news, comments }: CommentsListProps) => {
    const { loading, error } = useAppSelector(state => state.comments)
    const dispatch = useAppDispatch()

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.comments_section}>
            <div className={styles.comments_section_header}>
                <span>Comments: {!news?.kids ? 0 : news?.kids?.length}</span>
                <Button onClick={() => dispatch(fetchComments(id))}>
                    <Icon icon={'refresh'} />
                    refresh
                </Button>
            </div>
            {comments.map((kid) =>
                <CommentBranch key={kid.id} item={kid} level={0} />
            )}
        </div>
    )
}
