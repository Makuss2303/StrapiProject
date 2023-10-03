"use client"

import React from "react"
import Image from "@/components/atoms/image"
import WakkaButton from "@/components/atoms/button"
interface IMainVisual {
  data: {
    mainImage: MainImage
    mainTitle: string
    subTitle: string
    text: string
    button: {
      linkText: string
      linkURL: string
      targetBlank: boolean
    }
  }
}

interface MainImage {
  data: {
    attributes: {
      url: string
    }
  },
}

const MainVisual: React.FC<IMainVisual> = ({data}) => {
  return (
    <div className="mainVisual">
      <div className="container-full">
        <div className="mainVisual-wrap">
          <figure>
            {data?.mainImage?.data?.attributes && (
              <Image
                src={data.mainImage.data.attributes.url}
                alt="main_visual"
              />
            )}
          </figure>
          <div className="mainVisual-describe">
            {data?.mainTitle && (
              <h1
                className="mainVisual-describe__title"
                dangerouslySetInnerHTML={{ __html: data.mainTitle }}
              />
            )}
            {data?.subTitle && (
              <h2
                className="mainVisual-describe__miniTitle"
                dangerouslySetInnerHTML={{ __html: data.subTitle }}
              />
            )}
            {data?.text && (
              <p className="mainVisual-describe__content">{data.text}</p>
            )}
            {data?.button && (<WakkaButton text={data.button.linkText} link={data.button.linkURL} target={data.button.targetBlank}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainVisual
