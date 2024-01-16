"use client";

import React from "react";
import NavLinkProps from "./type";
import { usePathname, useRouter } from 'next/navigation';
import { scrollToElement } from '@/helpers/scroll.helpers'

const NavLink = (props: NavLinkProps) => {
    const activePath = usePathname();
    const router = useRouter();

    const onClick = () => {
        const linkPathname = new URL(props.href as string, location.href).pathname

        if (linkPathname !== activePath) {
            if (props.scrollElementId) router.push(`${props.href}?scroll-to=${props.scrollElementId}`)
            else router.push(props.href)
        } else {
            if (props.headerRef && props.headerRef.current)
                scrollToElement(props.scrollElementId, props.headerRef.current)
        }

        if (props.callback) props.callback()
    }

    return (
        <button
            id={props.id}
            className="p nav-link"
            onClick={onClick}
        >
            {props.children}
        </button>
    );
};

export default NavLink;
