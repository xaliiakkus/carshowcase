import { MouseEventHandler } from "react";

export interface CostomButtonProps {
    title: string;
    containerStyle: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}