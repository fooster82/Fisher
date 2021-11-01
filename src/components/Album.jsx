import React from 'react'

export function Album({title, release}) {
    return (
        <li>
            <strong>{title}</strong> <em>{release}</em>
        </li>
    )
}