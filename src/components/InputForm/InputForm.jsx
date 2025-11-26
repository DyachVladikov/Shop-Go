import classNames from "classnames"
import "./InputForm.scss"

const InputForm = (props) => {

    const {
        className,
        title,
        iconLink,
        id,
    } = props

    const userText = (text) => {
        console.log(text);
        
    }

    return(
        <div className={classNames("input", className)}>
            <img className="input__icon" src={iconLink} width={24} height={24}/>
            <input className="input-element" id={id} type="text" placeholder={title } onChange={(event) => {userText(event.target.value)}}/>
        </div>
    )
}

export default InputForm