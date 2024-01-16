import { Meta, StoryObj } from '@storybook/react'

export interface BackgroundProperties {
    backgroundAttachment?: string
    backgroundBlendMode?: string
    backgroundImage?: string
    backgroundOrigin?: string
    backgroundPositionX?: string
    backgroundPositionY?: string
    backgroundRepeat?: string
    backgroundSize?: string
}

export default interface BannerProps {
    children: React.ReactNode
    properties?: BackgroundProperties
    videoUrl?: string
    id?: string
}

export type BannerMeta = Meta<BannerProps>
export type BannerStory = StoryObj<BannerProps>
