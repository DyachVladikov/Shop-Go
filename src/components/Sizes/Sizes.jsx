import Button from "../Button"
import "./Sizes.scss"
import { memo, useState } from "react"
import classNames from "classnames"
const Sizes = memo((props) => {

    const {sizes,onSizeChoose, selectedSizes = []} = props

    const [isActiveSize, setIsActiveSize] = useState(null)

    return (
        <ul className="sizes__list">
            {sizes.map((size,index) => (
                    <li className="sizes__item" key={index} id={index}>
                        <Button 
                        title = {size}
                        className = {classNames("sizes__item-button", {'is-active': onSizeChoose === undefined ? isActiveSize === size: selectedSizes.includes(size)})}
                        label = {size}
                        type = "button"
                        onClick = {(() => {
                            setIsActiveSize(size)
                            onSizeChoose(size)
                        })}
                        mode = "sizes"
                        />
                 </li>
            ))}
        </ul>
    )
}, (prevProps, nextProps) => {
    return (
        prevProps.onSizeChoose === nextProps.onSizeChoose &&
        prevProps.selectedSizese === nextProps.selectedSizes
    );
});

export default Sizes