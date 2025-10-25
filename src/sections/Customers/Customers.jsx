import "./Customers.scss"
import Slider from "@/components/Slider"
import Button from "@/components/Button";
import { createSwiperConfig } from "@/modules/SwiperConfig";
import { Navigation, } from "swiper/modules";

const Customers = () => {


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
        slidesPerGroup: 3,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        spaceBetween: 20,
        
        breakpoints: {
                350: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                centeredSlides: true,
                },

                767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                centeredSlides: false,
                },

                1400: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20
                },
            }
        },
    });

    return (
        <section className="customers container ">
            <div className="customers__header ">
                <h2 className="customers__title">OUR HAPPY CUSTOMERS</h2>
                <div className="customers__actions">
                    <Button
                    className="swiper-prev"
                    title = "prev-slide"
                    isLabelHidden
                    onlyIcon
                    iconLink = "/src/assets/icons/arrow-prev.svg"
                    type = "button"
                    mode = "slider"
                    />
                    <Button 
                    className="swiper-next"
                    title = "next-slide"
                    isLabelHidden
                    onlyIcon
                    iconLink = "/src/assets/icons/arrow-next.svg"
                    type = "button"
                    mode = "slider"
                    />
                </div>
            </div>
            <Slider className = "customers__slider" type="customers" config = {swiperConfig}>
                {comments}
            </Slider>
        </section>
    )
}

export default Customers