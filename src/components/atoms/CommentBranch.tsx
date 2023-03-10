import React from 'react'
import { CommentNode } from './CommentNode'

export const CommentBranch = ({ item, level }) => {
    const [selected, setSelected] = React.useState(item.selected ?? false)

    const hasChildren = item.kids && item.kids.length !== 0

    const renderBranches = () => {
        if (hasChildren) {
            const newLevel = level + 1

            return item.childComments.map((child) => {
                return <CommentBranch key={child.id} item={child} level={newLevel} />
            })
        }
        return null
    }

    const toggleSelected = () => {
        setSelected(prev => !prev)
    }

    return (
        <>
            <CommentNode
                item={item}
                selected={selected}
                hasChildren={hasChildren}
                level={level}
                onToggle={toggleSelected}
            />
            {selected && renderBranches()}
        </>
    )
}
