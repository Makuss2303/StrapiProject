"use client"

import React from "react"
import Image from "@/components/atoms/image"
import NextImage from "next/image"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Solution: React.FC = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("intro", {params: {populate:'*'}})
      .then((response) => {
        if (response !== undefined) {
          setData(response.data.data?.attributes)
          setChecked(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <div className="solution">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          <div className="solution__transition">
            <figure>
              <NextImage
                src="/images/solution/solution-transition.png"
                alt="transition"
                fill
                sizes="(max-width: 170px) 100vw"
              />
            </figure>
          </div>
          <div className="solution__content">
            <div className="solution__content-textwrap">
              {data?.solutionTitle && (
                <h2
                  className="solution__title"
                  dangerouslySetInnerHTML={{ __html: data.solutionTitle }}
                />
              )}
              {data?.solutionText && (
                <p
                  className="solution__describe"
                  dangerouslySetInnerHTML={{ __html: data.solutionText }}
                />
              )}
            </div>
            <div className="solution__content-imgwrap">
              <figure>
                {data?.solutionImage1?.data?.attributes && (
                  <Image
                    src={data.solutionImage1.data.attributes.url}
                    alt="transition"
                  />
                )}
              </figure>
              <figure>
                {data?.solutionImage2?.data?.attributes && (
                  <Image
                    src={data.solutionImage2.data.attributes.url}
                    alt="transition"
                  />
                )}
              </figure>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Solution
