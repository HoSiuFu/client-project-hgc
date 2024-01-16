import { Meta, StoryObj } from '@storybook/react'
import { HTMLAttributeAnchorTarget } from 'react'

export default interface CardElementProps {
    title: React.ReactNode
    imageSrc: string
    imageAlt: string
    children?: React.ReactNode
    href: string
    target: HTMLAttributeAnchorTarget
    id?: string
}

export type CardElementMeta = Meta<CardElementProps>
export type CardElementStory = StoryObj<CardElementProps>
