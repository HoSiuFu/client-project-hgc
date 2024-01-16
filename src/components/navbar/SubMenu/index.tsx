'use client'

import React from 'react'
import SubMenuProps from './type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const SubMenu = (props: SubMenuProps) => {
    return (
        <div className="menu-container">
            <button
                id={props.id}
                className={`p menu-button ${props.isOpened ? 'active' : ''}`}
                onClick={props.onClick}
            >
                {props.title}
                <FontAwesomeIcon
                    className={`icon ${props.isOpened ? 'active' : ''}`}
                    icon={faAngleDown}
                />
            </button>
            <div className={`links ${props.isOpened ? 'active' : ''}`}>{props.children}</div>
        </div>
    )
}

export default SubMenu
