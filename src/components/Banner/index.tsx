import React from 'react'
import BannerProps from './type'

const Banner = (props: BannerProps) => {
    return (
        <div
            id={props.id}
            className="banner"
            style={{ ...props.properties }}
        >
            {props.videoUrl && (
                <>
                    <iframe
                        className="video"
                        src={props.videoUrl}
                    />
                    <div className='video-gradient'/>
                </>
            )}
            <div className="layout">
                <div className="grid-lg-start-1 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 banner-layout">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Banner
