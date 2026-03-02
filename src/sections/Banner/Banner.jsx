import Button from "@/components/Button"
import "./Banner.scss"
import BannerTag from "@/components/BannerTag"

import people1 from '@/assets/images/homePage/people1.jpg';
import star1 from '@/assets/images/homePage/star1.png';
import star2 from '@/assets/images/homePage/star2.png';

import { useNavigate } from "react-router-dom";

import develper1 from "@/assets/images/homePage/developers/1.png"
import develper2 from "@/assets/images/homePage/developers/2.png"
import develper3 from "@/assets/images/homePage/developers/3.png"
import develper4 from "@/assets/images/homePage/developers/4.png"
import develper5 from "@/assets/images/homePage/developers/5.png"



const Banner = () => {

    const navigate = useNavigate()

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
        develper1,
        develper2,
        develper3,
        develper4,
        develper5,
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
                onClick = {() => {
                    navigate(`shop`)
                }}
                />
                <div className="banner__body-tags">
                    {Tags.map((tag, index) => (
                        <BannerTag {...tag} key = {index}/>
                    ))}
                </div>
            </div>
            <div className="banner__images">
                <img className="banner__images-people" src={people1} />
                <img className="banner__images-star1" src={star1} />
                <img className="banner__images-star2" src={star2} />
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