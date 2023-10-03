"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import Image from "@/components/atoms/image"
import { useState, useEffect } from "react"
import axios from "@/utils/axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const WorkingFlow: React.FC = () => {
  const [data, setData] = useState<any>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    axios
      .get("structure-and-merit", {params: {populate:'*'}})
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
    <div className="workingFlow" id="workingflow">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {data?.title && <WakkaTitle text={data.title} />}

          <div className="workingFlow__subtitle">
            {data?.structureTitle && <h3>{data.structureTitle}</h3>}
          </div>

          {data?.structureText && (
            <p
              className="workingFlow__describe"
              dangerouslySetInnerHTML={{ __html: data.structureText }}
            />
          )}
          <div className="workingFlow__chart">
            <figure className="workingFlow__chart-traditional">
              {data?.structureImagePC?.data?.attributes && (
                <Image
                  src={data.structureImagePC.data.attributes.url}
                  alt="workingFlow"
                />
              )}
            </figure>
            <figure className="workingFlow__chart-headless">
              {data?.structureImageSP?.data?.attributes && (
                <Image
                  src={data.structureImageSP.data.attributes.url}
                  alt="workingFlow"
                />
              )}
            </figure>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkingFlow
