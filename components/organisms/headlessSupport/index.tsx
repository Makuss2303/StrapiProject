"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import HeadlessSupportItem from "@/components/molecules/headlessSupportItem"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const HeadlessSupport = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("compatible-cms", {params: {'populate[compatibleCMSItem][populate]':'*'}})
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
    <div className="headlessSupport">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {data?.compatibleCMSTitle && (
            <WakkaTitle text={data.compatibleCMSTitle} />
          )}
          {data?.compatibleCMSText && (
            <p
              className="headlessSupport-moreinfo"
              dangerouslySetInnerHTML={{ __html: data.compatibleCMSText }}
            />
          )}
          <div className="headlessSupport-list">
            {Array.isArray(data?.compatibleCMSItem) && data.compatibleCMSItem.map((item: any, index: number) => (
              <HeadlessSupportItem key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeadlessSupport
