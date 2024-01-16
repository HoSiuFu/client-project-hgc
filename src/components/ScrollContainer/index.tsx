'use client'

import React from "react";
import ScrollContainerProps from "./type";
import { useScrollToElementOnRender } from "@/hooks";

const ScrollContainer = (props: ScrollContainerProps) => {
    useScrollToElementOnRender('navbar')

    return <>
        {props.children}
    </>
}

export default ScrollContainer