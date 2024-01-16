import SectionSelector from '.'
import { SectionSelectorMeta, SectionSelectorStory } from './type'

const meta: SectionSelectorMeta = {
    title: 'Atoms/SectionSelector/SectionSelector',
    component: SectionSelector,
    argTypes: {
        id: {
            description: 'Defines the identifier of the SectionSelector',
        },
        children: {
            description: 'Defines the content inside the SectionSelector',
        },
        href: {
            description: 'Defines the path/url to travel to.',
        },
        active: {
            description: 'Defines if the SectionSelector is currently active or not',
        },
    },
    args: {
        id: 'Test',
        children: 'Test',
        href: '/',
    },
}

export default meta

export const Default: SectionSelectorStory = {}

export const Active: SectionSelectorStory = {
    args: {
        active: true,
    },
}
