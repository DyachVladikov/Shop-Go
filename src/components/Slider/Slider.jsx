import "./Slider.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Comment from "../Comment";
import ProductCard from "../ProductCard";

const Slider = (props) => {

    const {
        className,
        children = [],
        type, // "customers" || "products",
        config,
    } = props

    return(
        <div className = {`swiper-${className}`}>
            <Swiper 
                {...config}            
            >
                
                {children.map((item,index) => (
                    <SwiperSlide key={index}>
                        {type === "customers" && (
                            <Comment {...item}/>
                        )}
                        {type === "products" && (
                            <ProductCard {...item} className = "swiper" />
                        )}
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

export default Slider