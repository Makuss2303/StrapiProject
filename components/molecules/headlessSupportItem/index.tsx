"use client"

import React from "react"
import Image from "@/components/atoms/image"

interface IHeadlessSupportItem {
  data: {
    title: string
    text: string
    image: IImage
    price: number
    period: string
  }
}

interface IImage {
  data: {
    attributes: {
      url: string
    }
  }
}

const HeadlessSupportItem: React.FC<IHeadlessSupportItem> = ({ data }) => {
  return (
    <div className="headlessSupport-item">
      <div className="headlessSupport-item__image">
        <figure>
          {data?.image?.data?.attributes && (
            <Image
              src={data.image.data.attributes.url }
              alt="HeadlessSupportItem"
            />
          )}
        </figure>
      </div>
      {data?.title && (
        <h3
          className="headlessSupport-item__title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      )}
      {data?.text && (
        <p
          className="headlessSupport-item__describe"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
      <p className="headlessSupport-item__example">ページ数1枚の制作例</p>
      <div className="headlessSupport-item__pricing">
        {data?.price && (
          <div className="price">
            <h4>予算</h4>
            <span>{data.price}</span>
            <span>万円〜</span>
          </div>
        )}
        {data?.period && (
          <div className="period">
            <h4>期間</h4>
            <span>{data.period}</span>
            <span>ヶ月〜</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeadlessSupportItem
