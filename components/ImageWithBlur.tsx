import classNames from 'classnames'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { ReactElement } from 'react'

type Props = {
  src: string
  className?: string
  alt: string
  width: number
  height: number
}

export default async function ImageWithBlur(
  props: Props,
): Promise<ReactElement> {
  const buffer = await fetch(props.src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer)

  return (
    <Image
      className={props.className}
      alt={props.alt}
      src={props.src}
      placeholder="blur"
      blurDataURL={base64}
      width={props.width}
      height={props.height}
    />
  )
}
