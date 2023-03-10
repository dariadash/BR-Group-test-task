import React from 'react'
import styles from './MainPage.module.css'

import { useAppDispatch } from '@/hooks'

import { newsList } from '@/model/news/thunk'
import { AllNews } from '@/components/organisms'
import { Button, Icon } from '@/ui'

export function MainPage() {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.page_wrapper}>
            <div className={styles.page}>
                <header className={styles.header}>
                    <h2>
                        Hacker News
                    </h2>
                    <Button onClick={() => dispatch(newsList())}>
                        <Icon icon={'refresh'} />
                        refresh
                    </Button>
                </header>
                <AllNews />
            </div>
        </div>
    )
}
