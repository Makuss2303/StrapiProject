"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import FeatureItem from "@/components/molecules/featureItem"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Features = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("feature", {params: {'populate[featureItem][populate]':'*'}})
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
    <div className="feature" id="feature">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {data?.title && <WakkaTitle text={data.title} />}
          <div className="feature-list">
            {Array.isArray(data?.featureItem) && data.featureItem.map((item:any, index:number) => (
              <FeatureItem key={index} data={item} order={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Features
