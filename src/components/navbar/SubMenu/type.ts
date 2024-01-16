import { Meta, StoryObj } from '@storybook/react'

export default interface SubMenuProps {
    id: string
    isOpened: boolean
    title: string
    children: React.ReactNode
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

export type SubMenuMeta = Meta<SubMenuProps>
export type SubMenuStory = StoryObj<SubMenuProps>