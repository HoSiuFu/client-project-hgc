'use client'

import { useEffect } from 'react'

const useFadeInElements = () => {
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // fade in observed elements that are in view
                entry.target.classList.replace('hidden', 'fade-in-element')
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, { threshold: 0 })
        const fadeElements = document.querySelectorAll('.hidden')

        fadeElements.forEach((element) => observer.observe(element))

        return () => {
            observer.disconnect()
        }
    }, [])
}

export default useFadeInElements
