import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getTrackBackground, Range } from 'react-range'
import Polaroid from '../../components/polaroid/Polaroid'
import { getCategoryIds } from '../../lib/api/getCategories'
import { getCategoryBySlug } from '../../lib/api/getCategoryBySlug'
import Category from '../../lib/model/Category'
import styles from '../../styles/Categories.module.css'
import { useMedia } from 'react-use'

const StoryPage: NextPage<{
  category: Category
  size: number
  idx: number
  ids: string[]
}> = ({ category, size, idx, ids }) => {
  const router = useRouter()
  const min = 0
  const max = size - 1
  const moreThan1000 = useMedia('(min-width:1000px)');

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
      {moreThan1000 ? <div className={styles.background}>
        <div className={styles.blur}></div>
        <div className={styles.box}>
          {category.images.map((image, i) => {
            return (
              <Polaroid
                alt={image.id}
                key={i + ids[idx]}
                width={image.width}
                rotation={image.rotation}
                top={image.position.y}
                left={image.position.x}
                src={image.url}
              ></Polaroid>
            )
          })}
          <div className={styles.slider}>
            <span className={styles.label}>min</span>

            <Range
              min={min}
              max={max}
              values={[idx]}
              onChange={([newIdx]) => {
                router.push('/story/' + ids[newIdx])
              }}
              renderMark={({ props, index }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '10px',
                    width: '10px',
                    borderRadius: '10px',
                    marginTop: '4px',
                    backgroundColor: index < idx ? '#96cbf6' : '#fff',
                  }}
                />
              )}
              renderTrack={({ props, children }) => {
                return (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: '36px',
                      display: 'flex',
                      width: '100%',
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: '18px',
                        width: '100%',
                        borderRadius: '10px',
                        background: getTrackBackground({
                          values: [idx],
                          colors: ['#ffffff', '#ccc'],
                          min: min,
                          max: max,
                          rtl: false,
                        }),
                        alignSelf: 'center',
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )
              }}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '50px',
                    width: '20px',
                    borderRadius: '20px',
                    backgroundColor: '#1680d6',
                    border: '5px solid #fff',
                  }}
                />
              )}
            />
            <span className={styles.label}>max</span>
          </div>
          <div className={styles.categories}>
            <span className={styles.categoryText}>
              {category.explanation ?? 'No catgory'}
            </span>
          </div>
          <div className={styles.home}>
            <Link href="/" passHref>
              Confetti!
            </Link>
          </div>
        </div>
      </div> : 
        <div className={`${styles.mobile} fun-background`}>
          I&apos;m sorry but please use me on a bigger screen!
          <Link href="/" passHref>
            <a className={`button ${styles.goHome}`}>Home?</a>
          </Link>
        </div>
      }

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
