'use client'
import React from 'react'
import FadeInProps from './type'

const FadeIn = (props: FadeInProps) => {
    return (
        <div
            className={`${props.fadeInFromStart ? 'fade-in-element' : 'hidden'} ${
                props.className ? props.className : ''
            }`}
            id={props.id}
        >
            {props.children}
        </div>
    )
}

export default FadeIn
