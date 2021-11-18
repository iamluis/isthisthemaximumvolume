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
  const image = images.get(props.src)
  if (!image) {
    return null
  }
  return (
    <>
      <style jsx>
        {`
          .container-location {
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
            src={image ?? ''}
            alt={props.alt}
            title={props.alt}
            layout="responsive"
            objectFit="contain"
          ></Image>
        </a>
      </div>
    </>
  )
}

export default Polaroid
