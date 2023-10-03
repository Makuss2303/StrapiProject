"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import FaqItem from "@/components/atoms/collapsible-content"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Faq = () => {
  const [data, setData] = useState([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
    .get("faqs")
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
    (data.length > 0) && <div className="faq" id="faq">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          <WakkaTitle text="よくある質問" />
          <div className="faq-list">
            {SortData(data).map((item: any, index: any) => (
              <FaqItem key={index} data={item} order={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Faq
