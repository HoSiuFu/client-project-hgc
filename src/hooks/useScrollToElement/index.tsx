'use client'

import { scrollToElement } from '@/helpers/scroll.helpers'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Scrolls to element provided by query params, take in account the size of the navbar, hence why the navId is passed as its sole arg
const useScrollToElementOnRender = (navId: string) => {
    const activePathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const elementId = searchParams.get('scroll-to')

        const loadHandler = (elementId: string | null) => {
            if (elementId) {
                const nav = document.getElementById(navId)

                if (nav) {
                    scrollToElement(elementId, nav)
                }
            }
        }

        if (elementId) router.replace(`${activePathname}`, { scroll: false })

        if (document.readyState === 'complete') {
            loadHandler(elementId)
        } else {
            window.addEventListener('load', () => loadHandler(elementId))

            return () => {
                window.removeEventListener('load', () => loadHandler(elementId))
            }
        }
    }, [navId, searchParams, activePathname, router])
}

export default useScrollToElementOnRender
