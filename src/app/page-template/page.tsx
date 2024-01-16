import FadeIn from '@/components/FadeIn'
import FadeInContainer from '@/components/FadeIn/FadeInContainer'
import SectionSelector from '@/components/SectionSelector'
import { getDefaultValuesOfParams } from '@/helpers/url.helper'
import Image from 'next/image'
import React from 'react'

const AREAS = [
    {
        id: 'fst-section',
        children: 'First Section',
    },
    {
        id: 'scd-section',
        children: 'Second Section',
    },
    {
        id: 'thd-section',
        children: 'Third Section',
    },
]

const VALID_SECTIONS: Array<string> = AREAS.map((value) => value.id)

const DEFAULT_SECTION: string = AREAS[0].id

const Premise = () => {
    return (
        <FadeIn
            key="premise"
            fadeInFromStart
            className="section-text-container"
        >
            <Image
                className="image"
                width={1000}
                height={1000}
                alt="Photo"
                src="/images/igor-omilaev-fSgNguAjRGE-unsplash.jpg"
            />
            <h1 className="h1 title">First Section</h1>
            <p className="p text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id aliquet enim. Donec eu magna bibendum,
                blandit nulla in, interdum lorem. Curabitur dolor orci, sollicitudin eget bibendum id, convallis vitae
                arcu. Integer ac eros nec odio consequat laoreet eu non risus. Duis at placerat augue. Nullam in elit at
                turpis pretium efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at congue
                lorem. Phasellus purus orci, maximus et ipsum eget, efficitur rutrum nulla. Phasellus tincidunt suscipit
                scelerisque. Donec nulla ligula, blandit at velit et, consequat mattis magna.
                <br />
                <br />
                Nam iaculis dui orci, eu consectetur ipsum interdum et. Sed vulputate eleifend velit, sed facilisis
                metus efficitur eu. Duis porta, nibh ut sagittis fermentum, ante orci ultrices nulla, in porttitor eros
                sapien eu augue. Integer velit nisl, bibendum eget tempor at, luctus eget odio. Donec dignissim mi sit
                amet augue lacinia hendrerit. Morbi sit amet eros eu quam blandit tempus id eget risus. Pellentesque
                convallis posuere ante fermentum facilisis. Morbi fermentum massa odio, sit amet imperdiet justo dictum
                quis. Vivamus pulvinar consectetur augue, et tristique elit. Aenean placerat et justo ut mattis. Nunc
                aliquam velit non velit luctus, nec tempor nibh commodo. Vestibulum vel gravida risus. Cras eu arcu non
                tortor congue auctor non laoreet orci. Maecenas in lorem neque. Cras interdum lectus elit, sed imperdiet
                elit hendrerit a.
                <br />
                <br />
                Ut in ornare sem, eu dignissim tortor. Aliquam eros tellus, vulputate in augue vel, tincidunt cursus
                justo. Donec mattis ipsum massa, vel consequat nunc euismod eget. Fusce non congue mauris, sit amet
                pulvinar elit. Nunc sit amet tempus purus. Phasellus pretium, nisi sit amet iaculis viverra, nunc libero
                aliquet diam, pulvinar feugiat nibh tellus id elit. Nullam finibus volutpat tempus. Praesent in neque
                sed massa pretium pellentesque. Donec nunc tellus, efficitur sed metus eget, imperdiet congue nibh. Sed
                interdum, enim sed finibus iaculis, tortor purus egestas sapien, in lobortis nulla libero ac metus.
                Curabitur rutrum, metus a sollicitudin gravida, ante erat bibendum purus, eget dictum odio nunc ut elit.
                Nullam dictum lorem nec risus mattis bibendum. Etiam tincidunt ligula eget consequat hendrerit. Donec
                hendrerit mollis erat a ornare. Etiam id lacus congue, semper nulla vitae, tempor eros. Curabitur leo
                erat, interdum vitae rutrum eget, tristique quis risus.
            </p>
        </FadeIn>
    )
}

const SectionOne = () => {
    return (
        <FadeIn
            key="section-one"
            fadeInFromStart
            className="section-text-container"
        >
            <Image
                className="image"
                width={1000}
                height={1000}
                alt="Photo"
                src="/images/igor-omilaev-MqpcQjNQUFw-unsplash.jpg"
            />
            <h1 className="h1 title">Second Section</h1>
            <p className="p text">
                Nullam augue leo, finibus sed venenatis porttitor, finibus ac nulla. Vestibulum vulputate elit sit amet
                erat malesuada finibus. Morbi hendrerit malesuada congue. Ut orci ipsum, egestas vel posuere
                pellentesque, sodales eget erat. Aliquam feugiat condimentum quam eget pharetra. Sed sit amet neque
                mattis nulla commodo porttitor sed convallis mauris. Pellentesque ligula diam, laoreet sit amet lectus
                vitae, interdum mattis erat. Phasellus vulputate elit quis ex eleifend pellentesque. Proin gravida,
                felis id elementum ornare, nisi nulla iaculis nisl, a vestibulum leo mauris nec orci. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tincidunt sodales
                elit, lacinia fermentum purus dictum eget.
                <br />
                <br />
                Nunc gravida nibh nec risus dapibus cursus. Duis justo elit, tincidunt quis dui a, tristique pharetra
                tortor. Vivamus eu felis vulputate, commodo massa id, hendrerit massa. Nulla venenatis orci eu erat
                convallis placerat. Duis ac aliquet nunc. In id suscipit leo, ut finibus leo. Duis at vehicula dolor.
                Nullam malesuada efficitur fringilla. Suspendisse molestie eros non accumsan ultricies. Sed at mi ex.
                Cras dignissim sagittis magna at aliquam. Mauris lobortis sagittis suscipit. Nulla feugiat, felis et
                pretium laoreet, nisi magna consectetur justo, nec accumsan diam augue eu mauris. Etiam porttitor
                fringilla magna a feugiat.
                <br />
                <br />
                Aenean lobortis a nunc in elementum. Duis ut velit vitae lacus consequat aliquam. Ut vel ligula in velit
                scelerisque rutrum. Mauris facilisis eros sed mi lacinia consequat. Vivamus aliquam sodales pharetra.
                Cras eu est id ex venenatis malesuada eu nec ante. Nulla dolor lectus, convallis eu lobortis ut,
                pulvinar eget enim. Aliquam erat volutpat. Duis pellentesque ante eu semper condimentum. Vestibulum
                aliquet lectus id nisl lacinia, a pretium justo auctor. Nulla a iaculis velit. Sed euismod est ut enim
                scelerisque vestibulum. Nunc scelerisque, nisl at accumsan pellentesque, massa nulla semper nunc, vel
                ultrices dolor urna vitae mi. Maecenas sit amet ante elementum, posuere eros ac, efficitur metus.
                <br />
                <br />
                Praesent in vulputate tortor. Nulla facilisi. Etiam ut efficitur massa. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Donec tempus libero sit amet lorem gravida,
                quis aliquam ex iaculis. Vestibulum cursus augue quis ipsum molestie, vitae volutpat metus egestas.
                Vivamus at imperdiet orci. Nunc quis diam nec lectus hendrerit fermentum in quis purus. Praesent dictum
                turpis lectus, et pretium ante iaculis eget. Nam fermentum augue ligula, at auctor ipsum porta vel. Nunc
                eget ex bibendum, venenatis eros sit amet, ullamcorper turpis. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Vivamus facilisis, eros eu ultrices posuere, ex est
                hendrerit ante, ac ultrices felis purus id lorem.
                <br />
                <br />
                Ut id velit sed tortor ornare luctus nec nec tellus. Morbi venenatis nisl nunc, vitae pharetra purus
                dignissim eget. Curabitur at dui non libero blandit tincidunt. Ut molestie, orci ut blandit consequat,
                diam urna convallis justo, non vestibulum elit metus non felis. Sed consequat tincidunt ex eu
                sollicitudin. Phasellus sed condimentum risus. Pellentesque congue sodales ipsum iaculis semper. Donec
                quam est, suscipit at dui quis, vulputate facilisis augue. Nulla sagittis ligula sagittis convallis
                venenatis. Quisque ante lorem, dictum sed metus id, dapibus iaculis tortor. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>
        </FadeIn>
    )
}

const SectionTwo = () => {
    return (
        <FadeIn
            key="section-two"
            fadeInFromStart
            className="section-text-container"
        >
            <div className="image-container">
                <Image
                    className="image"
                    width={1000}
                    height={1000}
                    alt="Photo"
                    src="/images/igor-omilaev-VPqojGVDLpw-unsplash.jpg"
                />
            </div>
            <h1 className="h1 title">Third Section</h1>
            <p className="p text">
                Sed semper faucibus ante, eget sagittis purus rutrum pharetra. Curabitur ultricies nibh quis lorem
                molestie tincidunt. Vivamus dapibus ipsum nec odio facilisis molestie. Morbi eget fermentum orci.
                Vivamus vel nulla ut sapien viverra lacinia vitae in libero. Sed et diam ac risus fringilla tempor.
                Suspendisse potenti. Maecenas sollicitudin sagittis odio, vitae dignissim libero laoreet laoreet. Ut
                cursus dictum ex, sit amet consequat lacus sagittis eget. Nullam accumsan eros neque, sit amet
                ullamcorper nisi pellentesque vitae. Sed quam nisi, malesuada non aliquam ut, dignissim et turpis. Fusce
                turpis justo, mollis quis fermentum nec, mollis non justo.
                <br />
                <br />
                Curabitur rutrum iaculis eleifend. Vivamus ultricies sem mi, in consequat lectus eleifend a. Nullam erat
                libero, tincidunt vel hendrerit dapibus, feugiat vel metus. Suspendisse accumsan ipsum sit amet magna
                egestas, vitae fermentum ipsum efficitur. Nullam eget justo vitae lectus molestie fermentum at in diam.
                Cras nisi lacus, porttitor vel commodo at, facilisis ac dolor. Quisque lobortis, nunc a volutpat
                dapibus, elit eros consectetur turpis, ut interdum mauris arcu in ipsum. Fusce rutrum laoreet fringilla.
                Suspendisse elementum finibus congue.
                <br />
                <br />
                Nam sed aliquam nulla. In sed neque ligula. Vivamus porttitor gravida ipsum. Vestibulum vulputate vel
                lorem vel placerat. Fusce auctor turpis quis condimentum aliquet. Proin porta arcu id egestas bibendum.
                Nulla a dui in mauris volutpat commodo. Aliquam erat volutpat. In aliquet massa ut finibus ornare. Nulla
                dictum interdum odio vel scelerisque. Integer iaculis sollicitudin ligula, vel vehicula purus vestibulum
                sit amet. Vestibulum vitae fermentum lacus, vel euismod lorem. Fusce nunc eros, vehicula iaculis mauris
                at, placerat rhoncus ipsum. Aliquam lobortis nisl in felis venenatis, eget pharetra risus semper.
                Curabitur semper faucibus erat, nec consectetur justo laoreet ac.
            </p>
        </FadeIn>
    )
}

const Introduction = ({ searchParams }: { searchParams: { activeSection: string } }) => {
    const activeSection = getDefaultValuesOfParams(
        searchParams.activeSection,
        VALID_SECTIONS,
        DEFAULT_SECTION
    ) as string

    const section = (section: string) => {
        switch (section) {
            case 'fst-section':
                return <Premise />
            case 'scd-section':
                return <SectionOne />
            case 'thd-section':
                return <SectionTwo />
            default:
                return <></>
        }
    }

    return (
        <div className="page-template-container">
            <div
                id="start"
                className="padded-container"
            >
                <div className="layout">
                    <div className="grid-lg-start-1 grid-lg-end-4 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 section-selectors-container">
                        <div className="section-selectors-box">
                            {AREAS.map((area) => (
                                <SectionSelector
                                    id={area.id}
                                    href={`?activeSection=${area.id}`}
                                    key={area.id}
                                    active={activeSection === area.id}
                                >
                                    {area.children}
                                </SectionSelector>
                            ))}
                        </div>
                    </div>
                    <div className="grid-lg-start-4 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5">
                        <FadeInContainer>{section(activeSection)}</FadeInContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
