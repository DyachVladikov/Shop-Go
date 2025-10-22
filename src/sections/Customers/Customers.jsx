import "./Customers.scss"
import Slider from "@/components/Slider"
import Button from "@/components/Button";

const Customers = () => {
    return (
        <section className="customers container">
            <div className="customers__header">
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
            <Slider />
        </section>
    )
}

export default Customers