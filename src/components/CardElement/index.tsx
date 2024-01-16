'use client'

import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import CardElementProps from './type'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons'

interface CardBodyProps extends CardElementProps {
    paddingTop: string
}

const CardBody = (props: CardBodyProps) => {
    if (props.children)
        return (
            <div
                className="children-container"
                style={{paddingTop: props.paddingTop}}
            >
                {props.children}
                <div className="link-container">
                    <Link
                        className="p link"
                        href={props.href}
                        target={props.target}
                    >
                        View More
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        )

    return <></>
}

const CardTitleContainer = forwardRef<HTMLDivElement, CardElementProps>((props, ref) => {
    if (props.children) {
        return (
            <div
                ref={ref}
                className="title-container"
            >
                <h1 className="h1 title">{props.title}</h1>
            </div>
        )
    } else {
        return (
            <Link
                className="title-container"
                href={props.href}
                target={props.target}
            >
                <h1 className="h1 title">{props.title}</h1>
                <FontAwesomeIcon
                    icon={faCircleRight}
                    className="arrow-icon"
                />
            </Link>
        )
    }
})

CardTitleContainer.displayName = 'CardTitleContainer'

const CardElement = (props: CardElementProps) => {
    const titleContainerRef = useRef<HTMLDivElement>(null)
    const [calculatedPadding, setCalculatedPadding] = useState<string>('8rem')

    useEffect(() => {
        const calculatePadding = new ResizeObserver(() => {
            if (titleContainerRef?.current) {
                const elementHalfHeightRems = Math.round(titleContainerRef.current.clientHeight - 80) / 16
                setCalculatedPadding(`${elementHalfHeightRems + 3}rem`)
            } else {
                setCalculatedPadding('8rem')
            }
        })

        if (titleContainerRef.current) calculatePadding.observe(titleContainerRef.current)

        return () => {
            calculatePadding.disconnect()
        }
    }, [titleContainerRef])

    return (
        <div
            id={props.id}
            className="card"
        >
            <div className="image-container">
                <Image
                    width={2000}
                    height={2000}
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="image"
                    quality={25}
                />
            </div>
            <CardTitleContainer
                ref={titleContainerRef}
                {...props}
            />
            <CardBody
                paddingTop={calculatedPadding}
                {...props}
            />
        </div>
    )
}

export default CardElement
