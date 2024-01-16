import React from 'react'
import { SubMenuStory, SubMenuMeta } from './type'
import SubMenu from '.'

const meta: SubMenuMeta = {
    title: 'Atoms/Navbar/SubMenu',
    component: SubMenu,
    argTypes: {
        id: {
            description: 'Defines the identification of the menu',
        },
        title: {
            description: 'Defines the text inside the button that opens the menu',
        },
        isOpened: {
            description: 'Defines if the menu is opened or not',
        },
        children: {
            description: 'Defines the content inside the menu',
        },
        onClick: {
            description: 'Defines the function that is executed when the button is clicked',
        },
    },
    args: {
        id: 'test',
        title: 'Test',
        children: (
            <>
                <p className="p">Test1</p>
                <p className="p">Test2</p>
            </>
        ),
    },
}

export default meta

export const Default: SubMenuStory = {}
