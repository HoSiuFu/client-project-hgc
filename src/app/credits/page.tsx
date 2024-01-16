import SectionSelector from '@/components/SectionSelector'
import React from 'react'
import {
    SectionOne,
    SectionTwo,
} from './sections'
import { getDefaultValuesOfParams } from '@/helpers/url.helper'
import FadeInContainer from '@/components/FadeIn/FadeInContainer'

const AREAS = [
    {
        id: 'media-credits',
        children: 'Media Credits',
    },
    {
        id: 'portfolio',
        children: 'Check Out My Portfolio',
    },
]

const VALID_SECTIONS: Array<string> = AREAS.map((value) => value.id)

const DEFAULT_SECTION: string = AREAS[0].id

const Credits = ({ searchParams }: { searchParams: { activeSection: string } }) => {
    const activeSection = getDefaultValuesOfParams(
        searchParams.activeSection,
        VALID_SECTIONS,
        DEFAULT_SECTION
    ) as string

    const section = (section: string) => {
        switch (section) {
            case 'media-credits':
                return <SectionOne />
            case 'portfolio':
                return <SectionTwo />
            default:
                return <></>
        }
    }

    return (
        <div className="credits-container">
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

export default Credits
