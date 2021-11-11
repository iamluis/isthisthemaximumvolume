import type { NextComponentType } from 'next'
import Image from 'next/image'
import example from '../../public/background.jpeg'
import styles from '../../styles/Image.module.css'


const Home: NextComponentType = () => {
  return (<div className={styles.imageHolder}>
    <Image src={example} alt="birthday image" layout="responsive"></Image>
  </div> )
}

export default Home