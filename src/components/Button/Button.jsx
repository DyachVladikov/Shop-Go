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
        mode, // "small" || "modal" || "black" || slider
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
            {(!isLabelHidden || !onlyIcon) && (
                <span>{label}</span>
            )}
            {onlyIcon &&(
                <img className={classNames("button__icon-item", {[`button__icon--${mode}`] : mode})} src={iconLink} />
            )}
            {children} 
        </Component>
    )
}

export default Button