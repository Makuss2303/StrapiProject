"use client"

import React from "react"
import Image from "@/components/atoms/image"

interface SubItem {}

interface IProductionFlow {
  data: {
    title: string
    image: IImage
    text: string
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

const ProductionFlowItem: React.FC<IProductionFlow> = ({ data, order }) => {
  return (
    <div className="productionFlow-item">
      <figure className="productionFlow-item__image">
        {data?.image?.data?.attributes && <span>{order + 1}</span>}
        {data?.image?.data?.attributes && (
          <Image
            src={data.image?.data.attributes.url}
            alt="ProductionFlowItem"
          />
        )}
      </figure>
      <div className="productionFlow-item__text">
        {data?.title && (
          <h3
            className="productionFlow-item__text-title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        )}
        {data?.text && (
          <p
            className="productionFlow-item__text-describe"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
        )}
      </div>
      {data?.text && (
        <p
          className="productionFlow-item__describe"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </div>
  )
}

export default ProductionFlowItem
