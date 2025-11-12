import Button from "../Button"
import "./Sizes.scss"
import { useState } from "react"
import classNames from "classnames"
const Sizes = (props) => {

    const {sizes} = props

    const [isActiveSize, setIsActiveSize] = useState(null)
    return (
        <ul className="sizes__list">
            {sizes.map((size,index) => (
                    <li className="sizes__item" key={index}>
                        <Button 
                        title = {size}
                        className = {classNames("sizes__item-button", {"is-active" : isActiveSize === size })}
                        label = {size}
                        type = "button"
                        onClick = {(() => {
                            setIsActiveSize(size)
                        })}
                        mode = "sizes"
                        />
                 </li>
            ))}
        </ul>
    )
}

export default Sizes