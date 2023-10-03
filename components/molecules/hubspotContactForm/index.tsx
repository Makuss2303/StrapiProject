// @ts-nocheck
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const HubspotContactForm = (props: any) => {
  const { region, portalId, formId } = props
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/embed/v2.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: "#hubspotForm",
        })
      }
      setChecked(false)
    })
    return () => window.removeEventListener("load", script)
  }, [formId, portalId, region])

  return (
    <div>
      {checked ? (
        <Skeleton count={10} height={30} />
      ) : (
        <div id="hubspotForm"></div>
      )}
    </div>
  )
}

export default HubspotContactForm
