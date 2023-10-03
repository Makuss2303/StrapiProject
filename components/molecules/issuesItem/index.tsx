import React from "react"
import Image from "@/components/atoms/image"

interface IIssueItem {
  data: {
    text: string
    image: IImage
  }
}

interface IImage {
  data: {
    attributes : {
      url: string
    }
  }
}

const IssueItem: React.FC<IIssueItem> = ({ data }) => {
  return (
    <div className="issues-item">
      <figure>
        {data?.image?.data?.attributes && (
          <Image
            src={data.image.data.attributes.url}
            alt="issueItem"
          />
        )}
      </figure>
      {data?.text && (
        <h3
          className="issues-item__title"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </div>
  )
}

export default IssueItem
