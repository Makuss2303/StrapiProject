import React from "react"
import Link from "next/link"

interface IButton {
  text: string
  link: string
  target?: boolean
}

const WakkaButton: React.FC<IButton> = ({ text, link, target }) => {
  return (
    <Link className="wakka_btn" href={link ? link : "/"} target={target ? "_blank" : "_self"}>
      <span className="mainBtn-effect" />
      {text && (
        <span
          className="mainBtn-text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </Link>
  )
}

export default WakkaButton
