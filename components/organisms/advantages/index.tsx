"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import AdvantageItem from "@/components/molecules/advantageItem"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Advantages = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
    .get("structure-and-merit", {params: {'populate[meritItem][populate]':'*'}})
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
    <div className="advantages">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {data?.meritTitle && <WakkaTitle text={data.meritTitle} />}
          <div className="advantages-list">
            {Array.isArray(data?.meritItem) && data.meritItem.map((item:any, index:number) => (
              <AdvantageItem key={index} order={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Advantages
