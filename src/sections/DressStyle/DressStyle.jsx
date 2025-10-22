import "./DressStyle.scss"

const DressStyle = () => {

    const items = [
        {
            label: "Casual",
            id: "el1",
            imgSrc: "/src/assets/images/homePage/styleBanner/1.png",
            href: "/",
        },
        {
            label: "Formal",
            id: "el2",
            imgSrc: "/src/assets/images/homePage/styleBanner/2.png",
            href: "/",
        },
        {
            label: "Party",
            id: "el3",
            imgSrc: "/src/assets/images/homePage/styleBanner/3.png",
            href: "/",
        },
        {
            label: "Gym",
            id: "el4",
            imgSrc: "/src/assets/images/homePage/styleBanner/4.png",
            href: "/",
        },
    ]
    return (
        <section className="style-banner container">
            <div className="style-banner__wrapper">
                <h2 className="style-banner__title" >BROWSE BY dress STYLE</h2>
                <div className="style-banner__body">
                    <ul className="style-banner__body-list">
                        {items.map(({label, id, imgSrc, href}, index) => (
                            <a className="style-banner__body-item" href={href} key={index} id={id} style={{'--currentUrl': `url(${imgSrc})`}}>
                                <h4 className="style-banner__body-item-title">{label}</h4>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DressStyle