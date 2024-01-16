import React from 'react'
import SectionSelectorProps from './type'
import Link from 'next/link'

const SectionSelector = (props: SectionSelectorProps) => {
    return (
        <Link
            target="_self"
            href={props.href}
            id={props.id}
            className={`p section-selector ${props.active ? 'active' : ''}`}
        >
            {props.children}
        </Link>
    )
}

export default SectionSelector
