import "./Colors.scss"
import { useState, useMemo, memo } from "react"
import classNames from "classnames"
const Colors = memo((props) => {
    const {colors,onColorChange, selectedColors} = props
    

    return (
        <ul className="colors__list">
            {colors.map((color,index) => (
                <li className="colors__item" key={index} >
                        <button className={classNames("colors__item-button", {"is-active" : selectedColors.includes(color)})} 
                                style={{backgroundColor: `${color}`}}
                                onClick={() => {
                                onColorChange(color)
                        }}/>
                </li>
            ))}
        </ul>
    )
}, (prevProps, nextProps) => {
        return (
        prevProps.selectedColors === nextProps.selectedColors &&
        prevProps.onColorChange === nextProps.onColorChange
    );
});

export default Colors