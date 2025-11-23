import "./Colors.scss"
import { useState } from "react"
import classNames from "classnames"
const Colors = (props) => {
    const {colors,onColorChange, selectedColors} = props
    const [activeColor, setActiveColor] = useState(null);

    return (
        <ul className="colors__list">
            {colors.map((color,index) => (
                <li className="colors__item" key={index} >
                        <button className={classNames("colors__item-button", {"is-active" : selectedColors.includes(color)})} 
                                style={{backgroundColor: `${color}`}}
                                onClick={() => {
                                setActiveColor(color)
                                onColorChange(color)
                        }}/>
                </li>
            ))}
        </ul>
    )
}

export default Colors