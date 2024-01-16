'use client'

import React, { useEffect, useRef, useState } from 'react'
import NavLink from '../NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import SubMenu from '../SubMenu'

const Navbar = () => {
    const [displayNav, setDisplayNav] = useState<boolean>(false)
    const [activeMenu, setActiveMenu] = useState<string>('')
    const navRef = useRef<HTMLElement>(null)
    const controlButtonRef = useRef<HTMLButtonElement>(null)
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node) &&
                controlButtonRef.current &&
                !controlButtonRef.current.contains(event.target as Node)
            ) {
                setDisplayNav(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [navRef, controlButtonRef])

    useEffect(() => {
        const resetSideMenu = () => {
            if (window.innerWidth >= 1024) {
                setDisplayNav(false)
            }
            setActiveMenu('')
        }

        window.addEventListener('resize', resetSideMenu)
        return () => {
            window.removeEventListener('resize', resetSideMenu)
        }
    }, [displayNav])

    const onClickNavLink = () => {
        setDisplayNav(false)
        setActiveMenu('')
    }

    const onClickHamb = () => {
        setDisplayNav(!displayNav)
    }

    const onClickMenu = (event?: React.MouseEvent<HTMLButtonElement>) => {
        if (event) setActiveMenu(activeMenu === event.currentTarget.id ? '' : event.currentTarget.id)
    }

    return (
        <header
            ref={headerRef}
            className="nav-header"
            id="navbar"
        >
            <div className={`modal ${displayNav ? 'modal-active' : ''}`} />
            <div className="layout">
                <div className="grid-lg-start-1 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 flex-layout">
                    <div className="upper-part">
                        <Link
                            className="h2 title"
                            href="/"
                        >
                            LOGO
                        </Link>

                        <button
                            ref={controlButtonRef}
                            className={`btn-hamb`}
                            onClick={onClickHamb}
                        >
                            <FontAwesomeIcon
                                className="icon"
                                icon={faBars}
                            />
                        </button>
                    </div>

                    <nav
                        ref={navRef}
                        className={`nav ${displayNav ? 'opened' : ''}`}
                    >
                        <button
                            ref={controlButtonRef}
                            className={`btn-hamb`}
                            onClick={onClickHamb}
                        >
                            <FontAwesomeIcon
                                className="icon"
                                icon={faClose}
                            />
                        </button>
                        <ul className="menu">
                            <li>
                                <SubMenu
                                    id="homepage"
                                    title="Homepage"
                                    isOpened={activeMenu === 'homepage'}
                                    onClick={onClickMenu}
                                >
                                    <NavLink
                                        target="_self"
                                        href="/"
                                        headerRef={headerRef}
                                        callback={onClickNavLink}
                                        scrollElementId="start"
                                    >
                                        Start
                                    </NavLink>
                                    <NavLink
                                        target="_self"
                                        href="/"
                                        headerRef={headerRef}
                                        scrollElementId="fst-section"
                                        callback={onClickNavLink}
                                    >
                                        1st Section
                                    </NavLink>
                                    <NavLink
                                        target="_self"
                                        href="/"
                                        headerRef={headerRef}
                                        scrollElementId="scd-section"
                                        callback={onClickNavLink}
                                    >
                                        2nd Section
                                    </NavLink>
                                    <NavLink
                                        target="_self"
                                        href="/"
                                        headerRef={headerRef}
                                        scrollElementId="thd-section"
                                        callback={onClickNavLink}
                                    >
                                        3rd Section
                                    </NavLink>
                                    <NavLink
                                        target="_self"
                                        href="/"
                                        headerRef={headerRef}
                                        scrollElementId="card-area"
                                        callback={onClickNavLink}
                                    >
                                        Card Area
                                    </NavLink>
                                    <NavLink
                                        target="_self"
                                        href="/"
                                        headerRef={headerRef}
                                        scrollElementId="fth-section"
                                        callback={onClickNavLink}
                                    >
                                        4th Section
                                    </NavLink>
                                    <NavLink
                                        target="_self"
                                        href="/"
                                        headerRef={headerRef}
                                        scrollElementId="form"
                                        callback={onClickNavLink}
                                    >
                                        Form
                                    </NavLink>
                                </SubMenu>
                            </li>
                            <li>
                                <NavLink
                                    target="_self"
                                    href="/page-template"
                                    headerRef={headerRef}
                                    callback={onClickNavLink}
                                >
                                    Page Template
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    target="_self"
                                    href="/credits"
                                    headerRef={headerRef}
                                    callback={onClickNavLink}
                                >
                                    Credits
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
