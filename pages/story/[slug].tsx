import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Range } from 'react-range'
import Polaroid from '../../components/image/Polaroid'
import { getCategoryIds } from '../../lib/api/getCategories'
import { getCategoryBySlug } from '../../lib/api/getCategoryBySlug'
import { Category } from '../../lib/model/Categories'
import styles from '../../styles/Home.module.css'

const StoryPage: NextPage<Category> = (props) => {
  const [value, setValue] = useState([0])
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
          {props.images.map((image) => {
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
              step={5}
              min={0}
              max={100}
              values={value}
              onChange={setValue}
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

  if (!category) {
    return {
      notFound: true,
    }
  }
  return {
    props: category,
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
