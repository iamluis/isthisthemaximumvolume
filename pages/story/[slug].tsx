import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Range } from 'react-range'
import Polaroid from '../../components/polaroid/Polaroid'
import { getCategoryIds } from '../../lib/api/getCategories'
import { getCategoryBySlug } from '../../lib/api/getCategoryBySlug'
import Category from '../../lib/model/Category'
import styles from '../../styles/Home.module.css'

const StoryPage: NextPage<{
  category: Category
  size: number
  idx: number
  ids: string[]
}> = ({ category, size, idx, ids }) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>IS THIS THE MAX</title>
        <meta
          name="description"
          content="Happy birthday our dearest Alex! <3"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <div className={styles.blur}></div>
        <div className={styles.box}>
          {category.images.map((image) => {
            return (
              <Polaroid
                alt={image.id}
                key={image.id}
                width={image.width}
                rotation={image.rotation}
                top={image.position.y}
                left={image.position.x}
                src={image.url}
              ></Polaroid>
            )
          })}
          <div className={styles.slider}>
            <Range
              min={0}
              max={size - 1}
              values={[idx]}
              onChange={([newIdx]) => {
                router.push('/story/' + ids[newIdx])
              }}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '6px',
                    width: '100%',
                    backgroundColor: '#fff',
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '42px',
                    width: '42px',
                    backgroundColor: '#fff',
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params
  const category = getCategoryBySlug(slug)
  const ids = getCategoryIds()

  if (!category) {
    return {
      notFound: true,
    }
  }

  return {
    props: { category, size: ids.length, idx: ids.indexOf(slug), ids },
  }
}

export async function getStaticPaths() {
  const categories = getCategoryIds()

  return {
    paths: categories.map((id) => {
      return {
        params: {
          slug: id,
        },
      }
    }),
    fallback: false,
  }
}

export default StoryPage
