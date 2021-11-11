
import Image from 'next/image'
import { FunctionComponent } from 'react'
import example from '../../public/background.jpeg'
import styles from '../../styles/Image.module.css'

export interface ImageProps {
  width: number;
  rotation: number;
  top: number;
  left: number;
}

const Home: FunctionComponent<ImageProps> = (props) => {

  return (
    <>
    <style jsx>
      {`
        .container-location {
          width: ${props.width}px;
          transform: rotate(${props.rotation}deg);
          top: ${props.top}px;
          left: ${props.left}px;
        }
      `}
    </style>
    <div className={`${styles.imageHolder} container-location`}>
      <Image src={example} alt="birthday image" layout="responsive"></Image>
    </div> 
    </>
  )
}

export default Home