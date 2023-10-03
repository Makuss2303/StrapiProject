"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import HubspotContactForm from "@/components/molecules/hubspotContactForm"

const Form = () => {
  return (
    <div id="form">
      <div className="container">
        <WakkaTitle text="お問い合わせ" />
        <div className="form">
          <div className="form-describe">
            Wakka Inc.にご興味をお持ちいただき、ありがとうございます。
            <br />
            お問い合わせはこちらのフォームへご入力ください。
            ご質問など小さなことでもお気軽にお問い合わせください。
          </div>
          <div className="form-input">
            <HubspotContactForm
              region="na1"
              portalId="21657381"
              formId="5bfff6d6-6f49-47cb-b910-ed458eb33a70"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form
