import NavLink from '.'
import { NavLinkMeta, NavLinkStory } from './type'

const meta: NavLinkMeta = {
    title: 'Atoms/Navbar/NavLink',
    component: NavLink,
    argTypes: {
        href: {
            description: 'Defines the path/url to travel to.',
        },
        target: {
            description: 'Defines where the linked document should be opened.',
        },
        children: {
            description: 'Defines the content inside the NavLink component',
        },
        id: {
            description: 'Defines the identifier of the button',
        },
        scrollElementId: {
            description:
                'Defines the identifier of the element to scroll',
        },
        callback: {
            description: 
                'Defines the function to be executed along side the logic already present on the onClick function'
        },
        headerRef: {
            description:
                'Defines the reference to the navbar'
        }
    },
    args: {
        target: '_self',
        children: 'Link',
        id: 'test',
        headerRef: {
            current: null
        }
    },
}

export default meta

export const Default: NavLinkStory = {
    args: {
        href: 'https://github.com/HoSiuFu',
    },
}
