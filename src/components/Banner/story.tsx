import Banner from '.'
import { BannerMeta, BannerStory } from './type'
import image from '../../../public/images/claudio-schwarz-K3XGEoZgA0s-unsplash.jpg';

const meta: BannerMeta = {
    title: 'Atoms/Banner/Banner',
    component: Banner,
    argTypes: {
        children: {
            description: 'Describes the content inside the banner, the layout is already applied.',
        },
        properties: {
            description:
                'Describes the background properties of the banner, this allows us to change the background easily',
        },
        id: {
            description: 'Describes the identifier of the banner',
        },
        videoUrl: {
            description: 'Describes the url of the iframe that is shown as the banner background.',
        },
    },
    args: {
        children: <h1 className="h1">Test</h1>,
    },
}

export default meta

export const Default: BannerStory = {
    args: {
        properties: {
            backgroundImage: `linear-gradient(
            rgba(52, 81, 115, 0.5), 
            rgba(52, 81, 115, 0.5)
            ), url(${image.src})`,
        },
    },
}
export const VideoBackground: BannerStory = {
    args: {
        videoUrl:
            'https://www.youtube.com/embed/rqJDO3TWnac?si=wyw7MfnW9WSxtejq&autoplay=1&mute=1&loop=1&playlist=rqJDO3TWnac',
    },
}