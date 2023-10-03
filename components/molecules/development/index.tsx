"use client"

import React from "react"
import Image from "@/components/atoms/image"
import Link from "next/link"

interface Type {
  data: string
  slug: string
}
interface IDevelopment {
  data: {
    attributes: {
        clientName: string
        title: string
        thumbnail: IImage
        tag: Type[]
        link: string
    }
  }
}

interface IImage {
  data: {
    attributes: {
      url: string
    }
  }
}

const DevelopmentItem: React.FC<IDevelopment> = ({ data }) => {
  return (
    <Link
      className="development-item"
      href={data?.attributes?.link ? data.attributes.link : "/"}
      target="_blank"
    >
      <figure>
        {data?.attributes?.thumbnail?.data?.attributes && (
          <Image
            src={data.attributes.thumbnail.data.attributes.url}
            alt="DevelopmentItem"
          />
        )}
      </figure>
      <div className="development-item__textWrap">
        {data?.attributes?.clientName && (
          <div
            className="development-item__company"
            dangerouslySetInnerHTML={{ __html: data.attributes.clientName }}
          />
        )}
        {data?.attributes?.title && (
          <h3 
            className="development-item__title"
            dangerouslySetInnerHTML={{ __html: data.attributes.title }}
          />
        )}
        <div className="development-item__category">
          {data?.attributes?.tag.map((item:any, index:number) => (
            <span key={index}>#{item.text}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default DevelopmentItem
