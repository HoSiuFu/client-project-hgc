import FadeIn from '@/components/FadeIn'
import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
    return (
        <FadeIn
            key="sectionOne"
            fadeInFromStart
            className="section-text-container"
        >
            <Image
                className="cover-image"
                width={2000}
                height={2000}
                src="/images/mathias-reding-QdqK4doOzcQ-unsplash.jpg"
                alt="Cover"
            />
            <h1 className="h1 title">Media Credits</h1>
            <p className="p text">
                As referenced previously in this section all the media that is being used will be credited.
                <br />
                <br />
                Firstly all the icons used in this project are from the{' '}
                <a
                    href="https://fontawesome.com/"
                    target="_blank"
                >
                    Font Awesome
                </a>{' '}
                free plan.
            </p>
            <p className="p text">Now for the images:</p>
            <p className="p text">
                &#8226; The image used in the banner is a photo by{' '}
                <a
                    href="https://unsplash.com/@purzlbaum?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Claudio Schwarz
                </a>{' '}
                on{' '}
                <a
                    href="https://unsplash.com/photos/people-gathered-on-street-K3XGEoZgA0s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Unsplash
                </a>
            </p>
            <p className="p text">
                &#8226; The images used in the{' '}
                <a
                    href="https://unsplash.com/photos/a-group-of-three-men-in-suits-and-masks-fSgNguAjRGE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    first
                </a>
                ,{' '}
                <a
                    href="https://unsplash.com/photos/a-man-in-a-suit-with-a-virtual-headset-MqpcQjNQUFw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    second
                </a>{' '}
                and{' '}
                <a
                    href="https://unsplash.com/photos/a-man-in-a-suit-with-a-virtual-headset-VPqojGVDLpw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    thrid
                </a>{' '}
                section are photos/renders by{' '}
                <a
                    href="https://unsplash.com/@omilaev?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Igor Omilaev
                </a>{' '}
                on Unsplash
            </p>
            <p className="p text">
                &#8226; The image used in the media credits card is a photo by{' '}
                <a
                    href="https://unsplash.com/@matreding?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Mathias Reding
                </a>{' '}
                on{' '}
                <a
                    href="https://unsplash.com/photos/unsplash-logo-QdqK4doOzcQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Unsplash
                </a>
            </p>
            <p className="p text">
                &#8226; The image used in the first small card example is a photo by{' '}
                <a
                    href="https://unsplash.com/@homajob?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Scott Graham
                </a>{' '}
                on{' '}
                <a
                    href="https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Unsplash
                </a>
            </p>
            <p className="p text">
                &#8226; The image used in the second small card example is a photo by{' '}
                <a
                    href="https://unsplash.com/@claybanks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Clay Banks
                </a>{' '}
                on{' '}
                <a
                    href="https://unsplash.com/photos/silver-imac-on-brown-wooden-table-TQYTWfN1b7M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Unsplash
                </a>
            </p>
            <p className="p text">
                &#8226; The image used in the third small card example is a photo by{' '}
                <a
                    href="https://unsplash.com/@towfiqu999999?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Towfiqu Barbhuiya
                </a>{' '}
                on{' '}
                <a
                    href="https://unsplash.com/photos/person-holding-white-box-near-black-laptop-computer-vd_uVysczLI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                >
                    Unsplash
                </a>
            </p>
        </FadeIn>
    )
}

const SectionTwo = () => {
    return (
        <FadeIn
            key="sectionTwo"
            fadeInFromStart
            className="section-text-container"
        >
            <Image
                className="cover-image"
                width={2000}
                height={2000}
                src="/images/portfolio.png"
                alt="Cover"
            />
            <h1 className="h1 title">Check Out My Portfolio</h1>
            <p className="p text">
                Check out my other projects and get to know me better on my{' '}
                <a
                    href="https://danilo-m-andrade.vercel.app/"
                    target="_blank"
                >
                    portfolio
                </a>
                .
                <br />
                <br />
                I&apos;m mainly a frontend developer, but I also have work experience in other areas.
            </p>
        </FadeIn>
    )
}

export { SectionOne, SectionTwo }
