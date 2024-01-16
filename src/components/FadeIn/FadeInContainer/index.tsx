'use client'

import { useFadeInElements } from '@/hooks'
import FadeInContainerProps from './type'

const FadeInContainer = (props: FadeInContainerProps) => {
    useFadeInElements()

    return <>{props.children}</>
}

export default FadeInContainer
