"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import IssueItem from "@/components/molecules/issuesItem"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

interface Data {
  introTitle: string
  introItem: any
}

const Issues = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("intro", {params: {'populate[introItem][populate]':'*'}})
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
    <div className="issues">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {data?.introTitle && <WakkaTitle text={data.introTitle} />}
          <div className="issues-list">
            {Array.isArray(data?.introItem) && data.introItem.map((item:any, index:number) => (
              <IssueItem key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Issues
