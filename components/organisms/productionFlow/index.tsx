"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import ProductionFlowItem from "@/components/molecules/productionFlowItem"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const ProductionFlow = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("flow", {params: {'populate[flowItem][populate]':'*'}})
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
    <div className="productionFlow" id="productionFlow">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {data?.title && <WakkaTitle text={data.title} />}
          <div className="productionFlow-list">
            {Array.isArray(data?.flowItem) && data.flowItem.map((item:any, index:number) => (
              <ProductionFlowItem key={index} order={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductionFlow
