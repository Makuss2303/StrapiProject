"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"


interface Content {
  data: {
    attributes: {
      question: string
      answer: string
    }
  }
  order: number
}

const FaqItem: React.FC<Content> = ({ data, order }) => {
  const [isActive, setIsActive] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  function toggleActive() {
    setIsActive(!isActive)
    updateContentMaxHeight(!isActive)
  }

  function updateContentMaxHeight(checkActive: boolean) {
    if (checkActive) {
      if (ref.current && ref.current.scrollHeight) {
        const height = ref.current.scrollHeight
        setHeight(height)
      }
    } else {
      setHeight(0)
    }
  }

  useEffect(() => {
    const windowResize = () => {
      updateContentMaxHeight(isActive)
    }
    window.addEventListener("resize", windowResize)
    return () => window.removeEventListener("resize", windowResize)
  }, [isActive])

  useEffect(() => {
    if (order === 0) {
      setIsActive(true)
      updateContentMaxHeight(true)
    }
  }, [])

  return (
    <div className="collapse-item">
      <figure className="faq-question-icon">
        <Image
          src="/images/faq/question-icon.png"
          alt="question"
          fill
          sizes="(max-width: 170px) 100vw"
        />
      </figure>
      <div className="faq-item">
        {data.attributes.question && (
          <div className="faq-itemQ-wrap" onClick={toggleActive}>
            <div className="faq-itemQ">{data.attributes.question}</div>
            <div className="icon-wrap">
              <div className={`toggle ${isActive ? "" : "close"}`}></div>
            </div>
          </div>
        )}
        {data.attributes.answer && (
          <div
            className={`faq-itemA ${isActive ? "show" : ""}`}
            ref={ref}
            style={{ maxHeight: height }}
            dangerouslySetInnerHTML={{ __html: data.attributes.answer }}
          />
        )}
      </div>
    </div>
  )
}

export default FaqItem
