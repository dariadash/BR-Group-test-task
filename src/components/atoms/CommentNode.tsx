import React from 'react'

import { toNormalDateFull } from '@/helpers'

import { Button, Icon } from '@/ui'

import styles from './CommentNode.module.css'

export const CommentNode = ({ item, hasChildren, level, onToggle, selected }) => {
    return (
        <div
            className={styles.comment_wrapper}
            style={{ marginLeft: `${level * 20}px` }}
        >
            <div className={styles.comment_header}>
                <p className={styles.author}>{item.by}</p>
                <p className={styles.date}>{toNormalDateFull(item.time)}</p>
            </div>
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: item.text }} />
            {hasChildren &&
                <Button onClick={onToggle}>
                    <Icon icon={'answer'} />
                    Replies
                </Button>
            }
        </div>
    )
}
