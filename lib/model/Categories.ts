import { Image } from './Image'

interface Category {
  id: string
  explanation: string
  images: Image[]
}

const categories: Category[] = [
  {
    id: 'greece',
    explanation: 'Wow',
    images: [
      {
        id: 'vettel',
        position: {
          x: '70%',
          y: '40%',
        },
        width: '800px',
        rotation: 10,
        url: 'vettel',
      },
      {
        id: 'alonso',
        position: {
          x: '50%',
          y: '30%',
        },
        width: '300px',
        rotation: 0,
        url: 'alonso',
      },
    ],
  },
  {
    id: 'drivers',
    explanation: 'Wow',
    images: [
      {
        id: 'hamilton',
        position: {
          x: '30%',
          y: '30%',
        },
        width: '700px',
        rotation: -10,
        url: 'hamilton',
      },
    ],
  },
]

export type { Category }
export { categories as default }
