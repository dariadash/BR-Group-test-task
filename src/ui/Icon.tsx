import React from 'react'

import { RiQuestionAnswerLine } from 'react-icons/ri'
import { BiArrowBack } from 'react-icons/bi'
import { FiRefreshCcw } from 'react-icons/fi'

const Icons = {
    'refresh': FiRefreshCcw,
    'back': BiArrowBack,
    'answer': RiQuestionAnswerLine,
}

type Props = {
    icon: IconName
    size?: number
    onClick?: () => void
    style?: React.HTMLAttributes<SVGElement>
    color?: string
}

export type IconName = keyof typeof Icons

export const Icon = ({ icon, size = 24, onClick }: Props) => {
    const Component = Icons[icon]
    return (
        <Component onClick={onClick} />
    )
}