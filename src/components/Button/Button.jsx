import classNames from "classnames"
import "./Button.scss"

const Button = (props) => {

    const {
        title,
        isLabelHidden,
        href,
        onlyIcon = false,
        iconLink,
        className,
        label,
        type,
        onClick,
        children,
        isIconBefore, // "before" || "after" || "null"
        mode, // "small" || "modal" || "black" || slider || sizes || gray // {param, value}
    } = props

    const Component = href != undefined ? "a" : "button"
    const linkProps = Component === "a" ? {href} : [""]
    const buttonProps = Component === "button" ? {type, onClick, } : [""]
    const currentProps = Component === "a" ? linkProps : buttonProps

    const ComponentName = Component === "a" ? "button-link" : "button"
    
    

    return(
        <Component
        {...currentProps}
        className={classNames(
            ComponentName, className, {"button__icon" : onlyIcon}, {[`button--${mode}`] : mode}
        )}
        title={title}
        >
            {isIconBefore === "before" && (
                <img className="button__icon-before" src={iconLink} />
            )}
            {(!isLabelHidden || !onlyIcon) && (
                <span>{label}</span>
            )}
            {onlyIcon &&(
                <img className={classNames("button__icon-item", {[`button__icon--${mode}`] : mode})} src={iconLink} />
            )}
            {children} 
            {isIconBefore === "after" && (
                <img className="button__icon-after" src={iconLink} />
            )}
        </Component>
    )
}

export default Button