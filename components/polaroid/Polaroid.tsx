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
            display: inline-block;
            position: relative;
            width: ${props.width};
            transform: translate(-50%, -50%) rotate(${props.rotation}deg);
            top: ${props.top};
            left: ${props.left};
          }
        `}
      </style>
      <div
        className={`${styles.imageHolder} container-location`}
        title={props.alt}
      >
        <a href="#" title={props.alt}>
          <Image
            priority
            src={images.get(props.src) ?? ''}
            alt={props.alt}
            title={props.alt}
            layout="responsive"
          ></Image>
        </a>
      </div>
    </>
  )
}

export default Polaroid
