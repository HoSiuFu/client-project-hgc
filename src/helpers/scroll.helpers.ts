const scrollToElement = (elementId: string | undefined, navbar: HTMLElement) => {
    const bodyRect = document.body.getBoundingClientRect()
    let element: HTMLElement | null = null

    if (elementId) element = document.getElementById(elementId)

    if (element && navbar) {
        window.scroll({
            top: element.getBoundingClientRect().top - navbar.clientHeight - bodyRect.top,
            behavior: 'smooth',
        })
    }
}

export { scrollToElement }
