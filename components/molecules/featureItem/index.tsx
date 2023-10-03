"use client"

import React from "react"
import Image from "@/components/atoms/image"

interface IFeature {
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

const FeatureItem: React.FC<IFeature> = ({ data, order }) => {
  return (
    <div className="feature-item">
      <figure>
        {data?.image?.data?.attributes && (
          <Image
            src={data.image.data.attributes.url}
            alt="FeatureItem"
          />
        )}
      </figure>
      <div className="feature-item__text">
        <div className="feature-item__text-titleWrap">
          <span className="feature-item__text-order">0{order + 1}</span>
          <h3 className="feature-item__text-title">
            {data?.title && (
              <span dangerouslySetInnerHTML={{ __html: data.title }} />
            )}
          </h3>
        </div>
        {data?.text && (
          <p
            className="feature-item__text-describe"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
        )}
      </div>
    </div>
  )
}

export default FeatureItem
