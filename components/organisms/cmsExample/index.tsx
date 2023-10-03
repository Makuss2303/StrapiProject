"use client"

import React from "react"
import Image from "@/components/atoms/image"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import WakkaTitle from "@/components/atoms/title"

const CmsExample = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("compatible-cms", {params: {'populate':'*'}})
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
    <div className="cmsExample" id="CMSexample">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {data?.cmsExampleTitle && <WakkaTitle text={data.cmsExampleTitle} />}
          <div className="cmsExample-list">
            {Array.isArray(data?.cmsExampleItem.data) && data.cmsExampleItem.data.map((item: any, index: number) => (
              <figure
                key={index}
                className={"cmsExample" + (index + 1)}
                style={{ width: item.attributes.width }}
              >
                <Image
                  src={item.attributes.url}
                  alt="cms"
                />
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CmsExample
