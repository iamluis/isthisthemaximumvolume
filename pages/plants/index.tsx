import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Plants.module.css'
import plant from '../../public/plant-workshop/cute.gif'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} fun-background ${styles.plantBackground}`}>
      <Head>
        <title>2022 Plant</title>
        <meta name="description" content="I love plants!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <Link href="/" passHref>
          Home
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.plant}>
        <Image
            placeholder="blur"
            priority
            width="200"
            src={plant ?? ''}
            alt="cute plant"
            title="cure plant"
            objectFit="contain"
            blurDataURL="/plant-workshop/cute.gif"
          ></Image>
        </div>
        <Link href="plant-workshop/alexi.pdf" passHref>
          <span className={styles.button}>Let&apos;s make some plants!</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
