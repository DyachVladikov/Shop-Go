import classNames from "classnames"
import "./BurgerButton.scss"
import Button from "@/components/Button"
const BurgerButton = (props) => {

    

    const {className} = props

    
    return (
        <dvi className={classNames("burger-button" , className)}>
        </dvi>
    )
} 

export default BurgerButton