import React from 'react'
import styles from './Button.module.css'

type Props = {
    onClick?: () => void,
    disabled?: boolean,
    children?: React.ReactNode,
    type?: 'button' | 'reset' | 'submit' | undefined;
}

export const Button: React.FC<Props> = ({ children, onClick, disabled, type }) => {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={disabled ? () => '' : onClick}
            disabled={disabled}
        >
            {children}
        </button >
    )
}
