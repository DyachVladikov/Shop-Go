import React, { useRef } from "react";
import "./Slider.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Comment from "../Comment";
import Button from "../Button";
import { createSwiperConfig } from "@/modules/SwiperConfig";

const Slider = (props) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const {
        className,
        children
    } = props

    const comments = [
        {
            review: 5,
            nickName: "Alex K",
            description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
            hasOrdered: true,
        },
        {
            review: 5,
            nickName: "Sarah M",
            description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            hasOrdered: true,
        },
        {
            review: 5,
            nickName: "James L",
            description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
            hasOrdered: true,
        },
        {
            review: 5,
            nickName: "Alex K",
            description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        },
        {
            review: 5,
            nickName: "Sarah M",
            description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        },
        {
            review: 5,
            nickName: "James L",
            description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
            hasOrdered: true,
        },
        {
            review: 5,
            nickName: "Alex K",
            description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        },
        {
            review: 5,
            nickName: "Sarah M",
            description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            hasOrdered: true,
        },
        {
            review: 5,
            nickName: "James L",
            description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        },
    ]

    const swiperConfig = createSwiperConfig({
        prevSelector: ".swiper-prev",
        nextSelector: ".swiper-next",
        options: {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
                350: {
                slidesPerView: 1,
                spaceBetween: 20
                },
                1024: {
                slidesPerView: 2,
                spaceBetween: 10
                },
                1440: {
                slidesPerView: 3,
                spaceBetween: 20
                }
            }
        },
    });
    return(
        <div className = {`swiper-${className}`}>
            <Swiper
                {...swiperConfig}
            >
                
                {comments.map((comment,index) => (
                    <SwiperSlide key={index}>
                        <Comment {...comment}/>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

export default Slider