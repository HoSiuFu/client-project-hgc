import CardElement from '.'
import { CardElementMeta, CardElementStory } from './type'
import image from '../../../public/images/Intervention/1 25 abri.webp'

const meta: CardElementMeta = {
    title: 'Atoms/CardElement/CardElement',
    component: CardElement,
    argTypes: {
        children: {
            description: 'Describes the content inside the blue container except the link button',
        },
        id: {
            description: 'Describes the identifier of the CardElement',
        },
        href: {
            description: 'Describes the url to redirect to',
        },
        target: {
            description: 'Describes where the redirect document should open',
        },
        title: {
            description: 'Describes the title of the CardElement',
        },
        imageAlt: {
            description: 'Describes the alternate option of the image',
        },
        imageSrc: {
            description: 'Describes the source of the image',
        },
    },
    args: {
        id: 'Teste',
        href: '/',
        target: '_self',
        imageAlt: 'Imagem',
        imageSrc: image.src,
        title: <>Teste 123</>,
    },
}

export default meta

export const Default: CardElementStory = {
    args: {
        children: <p className='p'>Teste</p>,
    },
}

export const WithouthChildren = {}
