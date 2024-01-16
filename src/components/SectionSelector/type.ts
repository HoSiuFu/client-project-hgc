import { Meta, StoryObj } from "@storybook/react";

export default interface SectionSelectorProps {
    children: React.ReactNode
    id: string
    href: string
    active?: boolean
}

export type SectionSelectorMeta = Meta<SectionSelectorProps>
export type SectionSelectorStory = StoryObj<SectionSelectorProps>