"use client"

import React from "react"
import Image from "@/components/atoms/image"
import NextImage from "next/image"
import Link from "next/link"

interface IArticle {
  data: {
    attributes: {
      title: string
      thumbnail: IImage
      link: string
      targetBlank: boolean
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

const ArticleItem: React.FC<IArticle> = ({ data }) => {
  return (
    <Link
      className="article-item"
      href={data?.attributes.link ? data.attributes.link : "/"}
      target={data?.attributes.targetBlank ? "_blank" : "_self"}
    >
      <figure>
        {data?.attributes?.thumbnail?.data?.attributes && (
          <Image
            src={data.attributes.thumbnail.data.attributes.url}
            alt="ArticleItem"
          />
        )}
      </figure>
      <div className="article-item__textWrap">
        {data?.attributes?.title && (
          <p
            className="article-item__describe"
            dangerouslySetInnerHTML={{ __html: data.attributes.title }}
          />
        )}
        <div className="article-item__seemore">
          <span>詳しく見る</span>
          <div className="icon-wrap">
            <NextImage
              src="/images/article/icon.png"
              alt="icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleItem
