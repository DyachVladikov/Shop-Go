import classNames from "classnames"
import "./Select.scss"
import Button from "../Button"

const Select = (props) => {

    const {
        className,
        label,
        items = [],
        onClick,
        id,
        isExpanded,
    } = props

    const arrowLeftLink = "/src/assets/icons/select-arrow-right.svg"

    return(
        <div className={classNames("select", className)}>
            <select id="select" className="select__mobile visible-mobile" title="T-shirts">
                {items.map((item, index) => (
                    <option id={index} tabIndex={index} key={index}>{item}</option>
                ))}
            </select>
            <div className="select__body hidden-mobile">
                <div className="select__body-header" >
                    <span className={classNames("select__body-header-title", {"is-selected" : isExpanded})}>{label}</span>
                    <Button 
                    isLabelHidden
                    onlyIcon
                    iconLink = {arrowLeftLink}
                    className ={classNames("select__body-button", {"is-active" : isExpanded} )}
                    type ="button"
                    onClick = {() => {
                        onClick(id);                     
                    }}
                    />
                </div> 
                <div className={classNames("select__body-options", {"is-expanded" : isExpanded})}>
                    <ul className="select__body-options-list">
                        {items.map((element, index) => (
                            <button className="select__body-options-item" key={index}>{element}</button>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Select