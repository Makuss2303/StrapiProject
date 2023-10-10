
"use client"

import Image from "next/image"

interface DataImage {
  src: string
  alt: string
}

const Page: React.FC<DataImage>= ({src, alt}) =>  {
  return (
  <Image 
    src={`${process.env.NEXT_PUBLIC_DOMAIN}${src}`}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
  />
  )
}

export default Page