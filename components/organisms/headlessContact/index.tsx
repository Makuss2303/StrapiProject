"use client"

import React from "react"
import WakkaButton from "@/components/atoms/button"
interface IContact {
  type: string
  data: {
    title: string
    text: string
    button: {
      linkText: string
      linkURL: string
      targetBlank: boolean
    }
  }
}

const Contact: React.FC<IContact> = ({type, data}) => {
  return (
    <div className="headlessContact">
      <div className={type}>
        <div className="container">
          <div className="headlessContact-wrap">
            <div className="headlessContact__text">
              {data?.title && <h2 dangerouslySetInnerHTML={{ __html: data.title }} />}
              {data?.text && (
                <div
                  className="describe"
                  dangerouslySetInnerHTML={{ __html: data.text }}
                />
              )}
            </div>
            <div className="headlessContact__button">
              <WakkaButton text={data.button?.linkText} link={data.button?.linkURL} target={data.button?.targetBlank}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
