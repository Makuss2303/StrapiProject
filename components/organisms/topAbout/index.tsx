"use client"

import React from "react"
import Image from "@/components/atoms/image"
interface ITopAbout {
  data: {
    outlineImage: OutlineImage
    outlineHeading: string
    outlineText: string
  }
}

interface OutlineImage {
  data: {
    attributes: {
      url: string
    }
  },
}

const TopAbout: React.FC<ITopAbout> = ({data}) => {
  return (
    <div className="topAbout" id="about">
      <div className="container">
        <figure>
          {data?.outlineImage?.data?.attributes && (
            <Image
            src={data.outlineImage.data.attributes.url}
              alt="top_about"
            />
          )}
        </figure>
        {data?.outlineHeading && (
          <h2
            className="topAbout__title"
            dangerouslySetInnerHTML={{ __html: data.outlineHeading }}
          />
        )}
        {data?.outlineText && (
          <div
            className="topAbout__content"
            dangerouslySetInnerHTML={{ __html: data.outlineText }}
          />
        )}
      </div>
    </div>
  )
}

export default TopAbout
