"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import DevelopmentItem from "@/components/molecules/development"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Development = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("examples", { params: { populate: "*" } })
      .then((response) => {
        if (response !== undefined) {
          setData(response.data.data)
          setChecked(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  function SortData(data: Array<Object>) {
    if (Array.isArray(data)) {
      let sortedData = data.slice(0)
      sortedData.sort(function (a: any, b: any) {
        let numberA = a?.attributes.createdAt
        let numberB = b?.attributes.createdAt
        let dateA = new Date(numberA)
        let dateB = new Date(numberB)
        return dateB.getTime() - dateA.getTime()
      })
      return [sortedData[0], sortedData[1], sortedData[2]]
    }
    return []
  }

  return (
    data.length > 0 && (
      <div className="development" id="development">
        {checked ? (
          <div className="container">
            <Skeleton count={10} height={30} />
          </div>
        ) : (
          <div className="container">
            <WakkaTitle text="開発事例" />
            <div className="development-list">
              {SortData(data).map((item: any, index: any) => (
                <DevelopmentItem key={index} data={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  )
}

export default Development
