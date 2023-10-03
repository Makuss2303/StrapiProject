import React from "react"

interface IButton {
  text: string
}

const WakkaTitle: React.FC<IButton> = ({ text }) => {
  return (
    <div className="centerText">
      <h2 className="wakka_title" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default WakkaTitle
