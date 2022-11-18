import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Music.module.css'

const videos: string[] = [
  "https://www.youtube.com/embed/Zj_52DRvF3Q",
  "https://www.youtube.com/embed/Su6kidaGW_8",
  "https://www.youtube.com/embed/Govg_XmORLE",
  "https://www.youtube.com/embed/rcaf9pBdhrw",
  "https://www.youtube.com/embed/c0-hvjV2A5Y",
  "https://www.youtube.com/embed/GG2IQguY-J0"
];

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} fun-background`}>
      <Head>
        <title>MY MUSIC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <Link href="/" passHref>
          Home
        </Link>
      </div>
      <h1 className={styles.cutText}>Music that made us</h1>
      <div className={styles.videos}>
        {videos.map(video => {
          return (<div className={styles.video}>
            <iframe
              className={styles.iframe}
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Home
