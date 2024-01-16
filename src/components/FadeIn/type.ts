import { Meta, StoryObj } from '@storybook/react'

export default interface FadeInProps {
    children: React.ReactNode
    id?: string
    className?: string
    fadeInFromStart?: boolean
}

export type FadeInMeta = Meta<FadeInProps>
export type FadeInStory = StoryObj<FadeInMeta>
