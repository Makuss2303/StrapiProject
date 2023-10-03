"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import ArticleItem from "@/components/molecules/articleItem"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Article = () => {
  const [data, setData] = useState([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("documents", {params: {'populate':'*'}})
      .then((response) => {
        if (response !== undefined) {
          setData(response.data?.data)
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
        let numberA = a?.attributes.number
        let numberB = b?.attributes.number
        return numberA - numberB
      })
      return sortedData
    }
    return []
  }

  return (
    <div className="article" id="ariticles">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          <WakkaTitle text="関連記事＆関連資料" />
          <div className="article-list">
            {SortData(data).map((item: any, index: any) => (
              <ArticleItem key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Article
