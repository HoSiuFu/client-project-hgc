import Banner from '@/components/Banner'
import CardElement from '@/components/CardElement'
import FadeIn from '@/components/FadeIn'
import FadeInContainer from '@/components/FadeIn/FadeInContainer'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Form from './form'
import ScrollContainer from '@/components/ScrollContainer'
import { sendEmail } from './actions'
import bannerImage from '../../public/images/claudio-schwarz-K3XGEoZgA0s-unsplash.jpg'

export default function Home() {
    return (
        <ScrollContainer>
            <div
                id="start"
                className="home-page-container"
            >
                <Banner
                    properties={{
                        backgroundImage: `linear-gradient(rgba(52, 81, 115, 0.5), rgba(52, 81, 115, 0.5)), url(${bannerImage.src})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h1 className="h1 banner-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nisl aliquam ipsum
                        scelerisque vestibulum. Donec placerat leo ut molestie porttitor.
                    </h1>
                </Banner>
                <FadeInContainer>
                    <FadeIn
                        id="fst-section"
                        className="padded-container"
                        fadeInFromStart
                    >
                        <div
                            className="stripe stripe-blue stripe-right-top"
                            style={{ top: '-3em', left: 0 }}
                        />
                        <div
                            className="stripe stripe-blue stripe-left-top"
                            style={{ top: '-2em', left: 0 }}
                        />

                        <div className="layout">
                            <div className="grid-lg-start-1 grid-lg-end-8 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 text-box">
                                <div className="title-flex">
                                    <h1 className="h1 title">First Section</h1>
                                    <h3 className="h3 subtitle aligned">First Section Subtitle</h3>
                                </div>
                                <p className="p text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mollis odio. Etiam
                                    congue mauris dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    commodo et odio quis egestas. Phasellus laoreet orci a felis efficitur porttitor.
                                    Morbi ut massa eget enim efficitur pellentesque at at turpis. Nulla ultricies, augue
                                    vitae gravida dapibus, neque eros mollis arcu, ac congue purus arcu viverra metus.
                                    <br />
                                    <br />
                                    Sed placerat auctor sapien, at vehicula metus aliquam in. Nulla enim felis, varius
                                    ut aliquam et, lacinia quis arcu. Nullam pulvinar justo orci, a consequat nibh
                                    pulvinar nec. Sed ornare a lectus vitae tincidunt. Curabitur ornare lacinia lacus,
                                    hendrerit tempus urna suscipit feugiat. Sed ullamcorper interdum nulla a laoreet.
                                    Proin a lorem massa. Donec sit amet ante enim. Curabitur finibus mauris odio, eget
                                    molestie nisi laoreet et. Curabitur molestie, leo et pellentesque convallis, libero
                                    ipsum malesuada arcu, ut ullamcorper diam magna sit amet risus. Phasellus eu mi at
                                    diam hendrerit auctor sit amet id diam.
                                </p>
                                <div className="link-container">
                                    <Link
                                        className="link"
                                        target="_self"
                                        href="/page-template?activeSection=fst-section"
                                    >
                                        View More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>
                            <div className="grid-lg-start-8 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 image-container">
                                <div className="image-container-box">
                                    <Image
                                        width={2000}
                                        height={2000}
                                        src={'/images/igor-omilaev-fSgNguAjRGE-unsplash.jpg'}
                                        alt="Photo"
                                        className="photo"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="stripe stripe-blue stripe-right-bottom"
                            style={{ bottom: '-3em', right: 0 }}
                        />
                        <div
                            className="stripe stripe-blue stripe-left-bottom"
                            style={{ bottom: '-2em', right: 0 }}
                        />
                    </FadeIn>

                    <FadeIn
                        id="scd-section"
                        className="padded-container colored-container"
                    >
                        <div
                            className="stripe stripe-red stripe-right-top"
                            style={{ top: '-3em', left: 0 }}
                        />
                        <div
                            className="stripe stripe-red stripe-left-top"
                            style={{ top: '-2em', left: 0 }}
                        />

                        <div className="layout">
                            <div className="grid-lg-start-1 grid-lg-end-6 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 image-container">
                                <div className="image-container-box">
                                    <Image
                                        width={2000}
                                        height={2000}
                                        src={'/images/igor-omilaev-MqpcQjNQUFw-unsplash.jpg'}
                                        alt="Photo"
                                        className="photo"
                                    />
                                </div>
                            </div>
                            <div className="grid-lg-start-6 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 text-box">
                                <div className="title-flex">
                                    <h1 className="h1 title">Second Section</h1>
                                    <h3 className="h3 subtitle aligned">Second Section Subtitle</h3>
                                </div>
                                <p className="p text">
                                    Sed dui nibh, blandit mollis elit at, aliquet dignissim ante. Sed tempor purus
                                    dolor, ut placerat elit venenatis id. Proin lobortis aliquam urna, et commodo sapien
                                    varius in. Maecenas nec ultrices lorem. Aenean a hendrerit nulla. Maecenas tempus
                                    varius arcu sit amet tempor. Vivamus posuere interdum mi, faucibus ultricies libero
                                    posuere eu. Vestibulum nec massa eros. Quisque et interdum diam. Proin maximus sem
                                    id ex aliquam ullamcorper. Nunc rhoncus quis lectus nec commodo. Vestibulum quam
                                    nisl, dictum nec odio et, auctor condimentum magna. Donec urna metus, consectetur in
                                    risus id, condimentum laoreet leo. Cras hendrerit lacinia tellus, at aliquam nisi
                                    eleifend lacinia.
                                    <br />
                                    <br />
                                    Quisque quis molestie nunc. Pellentesque massa leo, tempus ut ante eu, venenatis
                                    egestas mi. Aliquam id viverra quam. Proin viverra tincidunt diam at semper. Aenean
                                    commodo quam nec vehicula pretium. Phasellus magna massa, auctor ac tincidunt ut,
                                    malesuada eget sapien. Vestibulum faucibus enim dolor, in ullamcorper libero laoreet
                                    posuere. Fusce malesuada nisl erat, eget elementum risus tempus quis. Curabitur eros
                                    sapien, ultricies et facilisis sed, ultrices a sem. Nulla facilisi. Curabitur dictum
                                    lorem ut ipsum dictum consequat.
                                    <br />
                                    <br />
                                    Curabitur sit amet nisl vitae elit egestas tempor. Suspendisse vitae ipsum quis
                                    purus finibus ultrices. Pellentesque sollicitudin porta purus eget ullamcorper.
                                    Aliquam in diam non elit mollis euismod semper vitae nibh. Vivamus sit amet elit at
                                    justo viverra vulputate. Aenean vel felis sit amet diam ornare iaculis. Nullam ac
                                    ante ornare, iaculis felis a, lacinia velit. Pellentesque non dui tincidunt,
                                    interdum est fringilla, bibendum tellus. Maecenas scelerisque felis in ipsum
                                    egestas, vel molestie ex commodo. Pellentesque blandit felis sit amet nisi porta
                                    lacinia. Ut facilisis diam ut elementum auctor. Phasellus consectetur feugiat
                                    mollis. Maecenas egestas tellus lorem, pulvinar pulvinar orci posuere id.
                                </p>
                                <div className="link-container">
                                    <Link
                                        className="link"
                                        target="_self"
                                        href="/page-template?activeSection=scd-section"
                                    >
                                        View More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="stripe stripe-red stripe-right-bottom"
                            style={{ bottom: '-3em', right: 0 }}
                        />
                        <div
                            className="stripe stripe-red stripe-left-bottom"
                            style={{ bottom: '-2em', right: 0 }}
                        />
                    </FadeIn>

                    <FadeIn
                        className="padded-container"
                        id="thd-section"
                    >
                        <div
                            className="stripe stripe-blue stripe-right-top"
                            style={{ top: '-3em', left: 0 }}
                        />
                        <div
                            className="stripe stripe-blue stripe-left-top"
                            style={{ top: '-2em', left: 0 }}
                        />

                        <div className="layout">
                            <div className="grid-lg-start-1 grid-lg-end-8 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 text-box">
                                <div className="title-flex">
                                    <h1 className="h1 title">Third Section</h1>
                                    <h3 className="h3 subtitle aligned">Third Section Subtitle</h3>
                                </div>
                                <p className="p text">
                                    Maecenas nec ante nec diam lobortis varius. Mauris eget lacus aliquet, iaculis lacus
                                    non, tempor nunc. Praesent vitae luctus ex. Nullam id tincidunt tellus. Aliquam
                                    fringilla massa eu metus bibendum pharetra. Ut vitae aliquam odio. Quisque viverra
                                    lacus diam, et vulputate felis sollicitudin vel. Sed vitae justo sed tellus posuere
                                    finibus. Integer maximus convallis pretium. Integer egestas velit et dolor tempus
                                    sagittis. Suspendisse consectetur lacus velit, ut sagittis mi egestas sit amet.
                                    Curabitur faucibus odio nisl, quis tempus lacus tincidunt id.
                                    <br />
                                    <br />
                                    Nam ac sem arcu. Pellentesque rhoncus at diam quis vehicula. Curabitur ac lacinia
                                    nisl. Cras sit amet erat nulla. Duis vestibulum, dolor vitae consectetur varius,
                                    justo elit accumsan magna, eget mollis lacus tortor vitae orci. Etiam porta eleifend
                                    aliquet. Etiam a justo ut nulla vestibulum vehicula in dapibus dolor. Cras a lacus
                                    vitae ligula vehicula sagittis eget sit amet justo. Aenean cursus faucibus augue,
                                    ornare tincidunt diam dictum id.
                                </p>
                                <div className="link-container">
                                    <Link
                                        className="p link"
                                        target="_self"
                                        href="/page-template?activeSection=thd-section"
                                    >
                                        View More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>
                            <div className="grid-lg-start-8 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 image-container">
                                <div className="image-container-box">
                                    <Image
                                        width={2000}
                                        height={2000}
                                        src={'/images/igor-omilaev-VPqojGVDLpw-unsplash.jpg'}
                                        alt="Photo"
                                        className="photo"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn
                        className="padded-container"
                        id="card-area"
                    >
                        <div className="layout">
                            <div className="grid-lg-start-1 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 text-box">
                                <div className="title-flex centered intervection">
                                    <h1 className="h1 title">Card Area</h1>
                                </div>
                            </div>

                            <FadeIn className="grid-lg-start-3 grid-lg-end-7 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 card-margins">
                                <CardElement
                                    href="/credits?activeSection=media-credits"
                                    imageSrc="/images/mathias-reding-QdqK4doOzcQ-unsplash.jpg"
                                    imageAlt="Unsplash Image"
                                    target="_self"
                                    title={<>Image Credits</>}
                                >
                                    <p className="p card-text">
                                        This section is going to be used to credit the people that made the media used
                                        in this website/template. Most of the content that is from Unsplash and Font
                                        Awesome.
                                        <br />
                                        <br />
                                        In order to check the creditation please click on the view more button.
                                    </p>
                                </CardElement>
                            </FadeIn>

                            <FadeIn className="grid-lg-start-7 grid-lg-end-11 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 card-margins">
                                <CardElement
                                    href="/credits?activeSection=portfolio"
                                    imageSrc="/images/portfolio.png"
                                    imageAlt="Portfolio Image"
                                    target="_self"
                                    title={<>Check out my Portfolio</>}
                                >
                                    <p className="p card-text">
                                        I also have an portfolio where I document all my personal projects, including
                                        custom commissions, like this project.
                                    </p>
                                </CardElement>
                            </FadeIn>

                            <FadeIn className="grid-lg-start-1 grid-lg-end-5 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 card-margins">
                                <CardElement
                                    href="/"
                                    imageSrc="/images/scott-graham-5fNmWej4tAA-unsplash.jpg"
                                    imageAlt="Photo"
                                    target="_self"
                                    title={<>Small Card 1</>}
                                />
                            </FadeIn>

                            <FadeIn className="grid-lg-start-5 grid-lg-end-9 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 card-margins">
                                <CardElement
                                    href="/"
                                    imageSrc="/images/clay-banks-TQYTWfN1b7M-unsplash.jpg"
                                    imageAlt="Photo"
                                    target="_self"
                                    title={<>Small Card 2</>}
                                />
                            </FadeIn>

                            <FadeIn className="grid-lg-start-9 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 card-margins">
                                <CardElement
                                    href="/"
                                    imageSrc="/images/towfiqu-barbhuiya-vd_uVysczLI-unsplash.jpg"
                                    imageAlt="Photo"
                                    target="_self"
                                    title={<>Small Card 3</>}
                                />
                            </FadeIn>
                        </div>
                    </FadeIn>
                    <FadeIn
                        id="fth-section"
                        className="padded-container colored-container"
                    >
                        <div className="grid-lg-start-1 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 text-box">
                            <div className="title-flex centered intervection">
                                <h1 className="h1 title">Forth Section</h1>
                                <p className="p text">
                                    Nunc a libero vitae felis varius convallis. Nulla fermentum erat et semper congue.
                                    Curabitur sit amet augue ornare, rutrum erat ac, porttitor odio. Mauris ante felis,
                                    iaculis ut hendrerit vitae, varius in justo. Fusce vel condimentum purus, ut auctor
                                    lorem. Pellentesque sit amet mi massa. Nullam maximus enim neque, sed tempus arcu
                                    sollicitudin sit amet. Donec eleifend a augue a ultricies. Aenean rutrum laoreet
                                    magna iaculis faucibus. Duis ullamcorper dictum tincidunt.
                                    <br />
                                    <br />
                                    Vestibulum suscipit eget quam eget posuere. Praesent ultricies est consectetur diam
                                    porttitor, ac maximus velit ornare. Donec et turpis eget elit sollicitudin tincidunt
                                    sit amet id lectus. Etiam a mauris ac nisl pharetra fringilla. In fringilla, tortor
                                    vitae mollis volutpat, nisl libero pretium neque, a congue arcu quam sed nisl.
                                    Phasellus ut mi at dui tempus porttitor. Suspendisse at mauris nisl. Praesent
                                    laoreet varius nisl eu congue. Sed nisl dui, pharetra ac accumsan ac, sodales eu
                                    tortor. Aenean sed tellus et sem cursus rhoncus at maximus purus. Suspendisse
                                    potenti. Cras sit amet libero placerat, sollicitudin nisi quis, maximus nulla.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn
                        id="form"
                        className="padded-container"
                    >
                        <div className="layout">
                            <div className="grid-lg-start-1 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 text-box">
                                <div className="title-flex centered intervection">
                                    <h1 className="h1 title">Template Form</h1>
                                </div>
                            </div>
                            <form
                                className="grid-lg-start-4 grid-lg-end-10 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 form"
                                action={sendEmail}
                            >
                                <Form />
                            </form>
                        </div>
                    </FadeIn>
                </FadeInContainer>
            </div>
        </ScrollContainer>
    )
}
