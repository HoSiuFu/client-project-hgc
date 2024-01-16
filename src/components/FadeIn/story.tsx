import FadeIn from '.'
import { FadeInMeta, FadeInStory } from './type'

const meta: FadeInMeta = {
    title: 'Atoms/FadeIn/FadeIn',
    component: FadeIn,
    argTypes: {
        children: {
            description: 'Describes the content inside the FadeIn element',
        },
        className: {
            description: 'Describes the additional classes added to the FadeIn element',
        },
        id: {
            description: 'Describes the identifier of the FadeIn Element',
        },
    },
    args: {
        id: 'test',
        children: <h1 className="h1">This is a test</h1>,
    },
}

export default meta

export const Default: FadeInStory = {}
