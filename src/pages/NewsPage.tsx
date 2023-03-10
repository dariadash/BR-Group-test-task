import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SingleNews } from '@/components/organisms'
import { Button, Icon } from '@/ui'

import styles from './NewsPage.module.css'

export const NewsPage = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.page_wrapper}>
            <div className={styles.page}>
                <div>
                    <Button onClick={() => navigate('/')}>
                        <Icon icon={'back'} />
                        back
                    </Button>
                </div>
                <SingleNews />
            </div>
        </div>
    )
}
