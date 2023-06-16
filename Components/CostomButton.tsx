'use client'
import React from "react"
import { CostomButtonProps } from "@/Types"


const CostomButton = ({ btnType, title, containerStyle, handleClick }: CostomButtonProps) => {
    return (
        <button
            type={btnType || "button"}
            disabled={false}
            className={`custom-btn ${containerStyle}`}
            onClick={() => { handleClick }}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CostomButton
