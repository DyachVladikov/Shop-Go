import Button from "@/components/Button"
import "./Banner.scss"
import BannerTag from "@/components/BannerTag"

const Banner = () => {

    const Tags = [
        {
            value: "200+", 
            description: "International Brands",
        },
        {
            value: "2,000+", 
            description: "High-Quality Products",
        },
        {
            value: "30,000+", 
            description: "Happy Customers",
        },
    ]

    const developers = [
        "/src/assets/images/homePage/developers/1.png",
        "/src/assets/images/homePage/developers/2.png",
        "/src/assets/images/homePage/developers/3.png",
        "/src/assets/images/homePage/developers/4.png",
        "/src/assets/images/homePage/developers/5.png"
    ]

    return (
        <section className="banner">
            <div className="banner__wrapper container">
                <div className="banner__body">
                <h1 className="banner__body-title">FIND CLOTHES <br/> THAT MATCHES <br /> YOUR STYLE</h1>
                <p className="banner__body-description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <Button 
                title = "Shop Now"
                className = "banner__body-button"
                label = "Shop Now"
                type = "link"
                mode = "black"
                href = "/shop/casual"
                />
                <div className="banner__body-tags">
                    {Tags.map((tag, index) => (
                        <BannerTag {...tag} key = {index}/>
                    ))}
                </div>
            </div>
            <div className="banner__images">
                <img className="banner__images-people" src="/src/assets/images/homePage/people1.jpg" />
                <img className="banner__images-star1" src="/src/assets/images/homePage/star1.png" />
                <img className="banner__images-star2" src="/src/assets/images/homePage/star2.png" />
            </div>
            </div>
            <div className="banner__footer">
                <div className="banner__footer-wrapper container">
                    {developers.map((path,index) => (
                        <img className="banner__footer-image" src={path} key = {index}/>
                    ))}
                </div>
            </div>
            
        </section>
    )
}

export default Banner