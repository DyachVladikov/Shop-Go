import classNames from "classnames"
import "./Content.scss"

const Content = (props) => {
    
    const {
        children,
        className,
    } = props

    return (
        <main className={classNames("main", className)}>
            {children}
        </main>
    )
}

export default Content