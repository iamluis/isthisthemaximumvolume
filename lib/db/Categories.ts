import Category from '../model/Category'

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
        url: 'ChopsticksGlases',
      },
      {
        id: 'alonso',
        position: {
          x: '50%',
          y: '30%',
        },
        width: '300px',
        rotation: 0,
        url: 'ChopsticksCouch',
      },
    ],
  },
  {
    id: 'brazil',
    explanation: 'Vuvuzela!',
    images: [
      {
        id: 'hamilton',
        position: {
          x: '60%',
          y: '30%',
        },
        width: '500px',
        rotation: 20,
        url: 'ChopsticksCouch',
      },
    ],
  },
  {
    id: 'monaco',
    explanation: 'Moneyzzzz',
    images: [
      {
        id: 'vettel',
        position: {
          x: '30%',
          y: '50%',
        },
        width: '450px',
        rotation: 0,
        url: 'ChopsticksGlases',
      },
    ],
  },
  {
    id: 'spain',
    explanation: 'Free Catalonia',
    images: [
      {
        id: 'alonso',
        position: {
          x: '30%',
          y: '30%',
        },
        width: '700px',
        rotation: 170,
        url: 'ChopsticksCouch',
      },
    ],
  },
]

export default categories
