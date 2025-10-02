import classNames from "classnames"
import "./Button.scss"

const Button = (props) => {

    const {
        title,
        isLabelHidden,
        href,
        onlyIcon,
        icon,
        className,
        label,
        type,
    } = props

    const Component = href != undefined ? "a" : "button"
    const linkProps = Component === "a" ? {href} : [""]
    const buttonProps = Component === "button" ? {type} : [""]
    const currentProps = Component === "a" ? linkProps : buttonProps

    return(
        <Component
        {...currentProps}
        className={classNames("button", className, {"button--transparent" : onlyIcon})}
        >
            {!isLabelHidden && (
                <span>{label}</span>
            )}
            {onlyIcon &&(
                <div className="button__icon">
                    <img className="button__icon-item" src={icon} />
                </div>
            )}
        </Component>
    )
}

export default Button