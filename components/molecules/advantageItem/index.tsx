"use client"

import React from "react"
import Image from "@/components/atoms/image"

interface IAdvantageItem {
  data: {
    title: string
    text: string
    image: IImage
  }
  order: number
}

interface IImage {
  data: {
    attributes: {
      url: string
    }
  }
}

const AdvantageItem: React.FC<IAdvantageItem> = ({ data, order }) => {
  return (
    <div className="advantages-item">
      <figure>
        {data?.image?.data?.attributes && (
          <Image
            src={data.image.data.attributes.url}
            alt="AdvantageItem"
          />
        )}
        <span>{order + 1}</span>
      </figure>
      {data?.title && (
        <h3
          className="advantages-item__title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      )}
      {data?.text && (
        <div
          className="advantages-item__describe"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </div>
  )
}

export default AdvantageItem
