import "./NavigationProduct.scss"

const NavigationProduct = (props) => {
    const {path = []} = props
    return (
        <div className="navigation">
            <span className="navigation__item navigation__item--first">Home</span>
            {path.map((item, index) => (
                <span className="navigation__item" key={index}>{item}</span>
            ))}
        </div>
    )
}

export default NavigationProduct