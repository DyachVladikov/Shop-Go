import classNames from "classnames"
import "./InputForm.scss"

const InputForm = (props) => {

    const {
        className,
        title,
        iconLink,
    } = props

    return(
        <div className={classNames("input", className)}>
            <img className="input__icon" src={iconLink} width={24} height={24}/>
            <input className="input-element" id="searchInput" type="text" placeholder={title}/>
        </div>
    )
}

export default InputForm