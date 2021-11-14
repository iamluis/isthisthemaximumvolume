import Image from 'next/image'
import { FunctionComponent } from 'react'
import { images } from '../../lib/model/Image'
import styles from '../../styles/Image.module.css'

export interface ImageProps {
  alt: string
  width: string
  rotation: number
  top: string
  left: string
  src: string
}

const Polaroid: FunctionComponent<ImageProps> = (props) => {
  return (
    <>
      <style jsx>
        {`
          .container-location {
            width: ${props.width};
            transform: rotate(${props.rotation}deg) translate(-50%, -50%);
            top: ${props.top};
            left: ${props.left};
          }
        `}
      </style>
      <div className={`${styles.imageHolder} container-location`}>
        <Image
          src={images.get(props.src) ?? ''}
          alt={props.alt}
          layout="responsive"
        ></Image>
      </div>
    </>
  )
}

export default Polaroid
