import classNames from "classnames"
import "./Accrodion.scss"
import Button from "../Button"
import { useState } from "react"

const Accrodion = (props) => {

    const {
        className,
        isNeedToHide = true,
        children,
        title,
    } = props

    const optionSrc = "/src/assets/icons/options.svg"
    const arrowSrc = "/src/assets/icons/arrow-down.svg"

    const currentIcon = isNeedToHide ? arrowSrc : optionSrc

    const [isAccordionOpen, setIsAccordionOpen] = useState(true);


    return(
        <div className={classNames("accordion", className)}>
            <div className="accordion__header">
                <h2 className="accordion__header-title">{title}</h2>
                <Button 
                title = "options"
                isLabelHidden
                onlyIcon
                iconLink = {currentIcon}
                className = {classNames("accordion__header-title-button", {
                    "is-active": isAccordionOpen
                })}
                type = "button"
                onClick = {(() => {
                    setIsAccordionOpen((prev) => !prev)
                })}
                />
            </div>
            <div className="accordion__body">
                {isAccordionOpen && (
                    <>
                        {children}
                        <div className="hr"/>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Accrodion