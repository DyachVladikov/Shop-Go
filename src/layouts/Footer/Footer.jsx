import InputForm from "@/components/InputForm"
import "./Footer.scss"
import Button from "@/components/Button"

const Footer = () => {

    const menuItems = [
        {
            title: "COMPANY",
            items: [
                "About",
                "Features",
                "Works",
                "Career"
            ]
        },
        {
            title: "HELP",
            items: [
                "Custom Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy"
            ]
        },
        {
            title: "FAQ",
            items: [
                "Account",
                "Manage Deliveries",
                "Orders",
                "Payments"
            ]
        },
        {
            title: "RESOURCES",
            items: [
                "Fee eBooks",
                "Development Tutorial",
                "How to - Blog",
                "Youtube Playlist"
            ]
        },
    ]
    const cards = [
        {
            label: "Visa",
            href: "/src/assets/images/Footer/cards/1.png",
        },
        {
            label: "MasterCard",
            href: "/src/assets/images/Footer/cards/2.png",
        },
        {
            label: "PayPal",
            href: "/src/assets/images/Footer/cards/3.png",
        },
        {
            label: "ApplePay",
            href: "/src/assets/images/Footer/cards/4.png",
        },
        {
            label: "GooglePay",
            href: "/src/assets/images/Footer/cards/5.png",
        },
    ]
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__banner container">
                    <div className="footer__banner-wrapper">
                        <h3 className="footer__banner-wrapper-label">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h3>
                        <div className="footer__banner-wrapper-actions">
                            <InputForm 
                            className="footer__banner-wrapper-input"
                            title="Enter your email address"
                            iconLink = "/src/assets/icons/latter.svg"
                            />
                            <Button 
                            title = "Subscribe to Newsletter"
                            className = "footer__banner-wrapper-subscribe-button"
                            label = "Subscribe to Newsletter"
                            type = "button"
                            />
                        </div>
                    </div>
                </div>
                <div className="footer__body">
                    <div className="footer__body-left-side">
                        <Button className="footer__body-logo-button" href="/">
                            <img src="/src/assets/icons/logo.svg" alt="Logo" loading="lazy"/>
                        </Button>
                        <p className="footer__body-description">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="footer__body-soc1als">
                            <img className="footer__body-soc1als-item" src="/src/assets/icons/twitter.svg" alt="twitter"/>
                            <img className="footer__body-soc1als-item" src="/src/assets/icons/facebook.svg" alt="facebook"/>
                            <img className="footer__body-soc1als-item" src="/src/assets/icons/instagram.svg"alt="instagram" />
                            <img className="footer__body-soc1als-item" src="/src/assets/icons/cat.svg" alt="cat"/>
                        </div>
                    </div>
                    <nav className="footer__menu">
                        {menuItems.map(({title, items}, index) => (
                            <ul className="footer__menu-list" key={index}>
                                <li className="footer__menu-title h6">{title}</li>
                                {items.map((item, index) => (
                                    <a className="footer__menu-item" key={index}>{item}</a>
                                ))}
                            </ul>
                        ))}
                    </nav>
                </div>
                <div className="hr"></div>
                <div className="footer__lower">
                    <span className="footer__lower-label">Shop.co © 2000-2021, All rights reserved</span>
                    <ul className="footer__lower-cards-list">
                        {cards.map(({label, href}, index) => (
                            <li className="footer__lower-cards-item" key={index}>
                                <img src={href} alt ={label} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer