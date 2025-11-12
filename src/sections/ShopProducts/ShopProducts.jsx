import Accrodion from "@/components/Accordion"
import "./ShopProducts.scss"
import Colors from "@/components/Colors"
import Sizes from "@/components/Sizes"
import Button from "@/components/Button"
import Scroll from "@/components/Scroll"
import Select from "@/components/Select"
import { useState } from "react"
import Slider from "@/components/Slider"
import products from "@/collections/products/products"
import {createSwiperConfig} from "@/modules/SwiperConfig"
import { Navigation, Grid, Pagination} from "swiper/modules";

const ShopProducts = () => {

    const [indexSelectExpanded, setIndexSelectExpanded] = useState(null)

    const colors = [
        "#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", "#7D06F5", "#F506A4", "#fff", "#000"
    ]
    const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large" ]
    const items = ["i1","i2","i3","i4","i5"]

    const filtersCategoriesItems = [
        {
            label: "T-shirt",
            items: ["T-shirt-1", "T-shirt-2", "T-shirt-3", "T-shirt-4", "T-shirt-5"]
        },
        {
            label: "Shorts",
            items: ["Shorts-1", "Shorts-2", "Shorts-3", "Shorts-4", "Shorts-5"]
        },
        {
            label: "Shirts",
            items: ["Shirts-1", "Shirts-2", "Shirts-3", "Shirts-4", "Shirts-5"]
        },
        {
            label: "Hoodie",
            items: ["Hoodie-1", "Hoodie-2", "Hoodie-3", "Hoodie-4", "Hoodie-5"]
        },
        {
            label: "Jeans",
            items: ["Jeans-1", "Jeans-2", "Jeans-3", "Jeans-4", "Jeans-5"]
        }
    ]
    const stylesCategoriesItems = [
        {
            label: "Casual",
            items: ["Casual-1", "Casual-2", "Casual-3", "Casual-4", "Casual-5"]
        },
        {
            label: "Formal",
            items: ["Formal-1", "Formal-2", "Formal-3", "Formal-4", "Formal-5"]
        },
        {
            label: "Party",
            items: ["Party-1", "Party-2", "Party-3", "Party-4", "Party-5"]
        },
        {
            label: "Gym",
            items: ["Gym-1", "Gym-2", "Gym-3", "Gym-4", "Gym-5"]
        }
    ]

    const isSelectExpanded = (idSelect) => {
        setIndexSelectExpanded(prevId => prevId === idSelect ? null : idSelect)
        console.log(swiperConfig);
        
    }

    const swiperConfig = createSwiperConfig({
            prevSelector: ".swiper-prev",
            nextSelector: ".swiper-next",
            pagination: {
                selector: ".shop-products__actions-pagination",
                type: "bullets",
                clickable: true,
            },
            options: {
            modules: [Navigation, Grid, Pagination],
            slidesPerView: 3,
            slidesPerGroup: 9,
            centeredSlides: false,
            spaceBetween: 16,
            grid: {
                rows: 3,
                fill: "row" 
            },
            breakpoints: {
                1200: {
                slidesPerView: 3,
                slidesPerGroup: 9,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: "row" 
                },
                },

                1440: {
                slidesPerView: 4,
                slidesPerGroup: 12,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: "row" 
                },
                },
            }
        },
    });

    return(
        <section className="shop-products">
            <header className="shop-products__header">
                <h1 className="visually-hidden">Shop</h1>
                <div>Navigation Component</div>
            </header>
            <div className="shop-products__body">
                <aside className="shop-products__filters">
                    <div className="shop-products__filters-categories">
                        <Accrodion
                        className = "accordion__categories"
                        isNeedToHide = {false}
                        title = "Filters"
                        isHrNeedAfterTitle
                        >
                            {filtersCategoriesItems.map((category, index) => (
                                <Select label={category.label} items={category.items} 
                                id={index} onClick={isSelectExpanded} 
                                isExpanded = {indexSelectExpanded === index} 
                                key={index}/>
                            ))}     
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-price">
                        <Accrodion
                        className = "accordion__price"
                        isNeedToHide
                        title = "Price"
                        >
                            <Scroll className="price" max="500" min="20" />
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-colors">
                        <Accrodion
                        className = "accordion__colors"
                        isNeedToHide
                        title = "Colors"
                        >
                            <Colors colors={colors} />
                        </Accrodion>
                        
                    </div>
                    <div className="shop-products__filters-sizes">
                        <Accrodion
                        className = "accordion__sizes"
                        isNeedToHide
                        title = "Sizes"
                        >
                            <Sizes sizes={sizes}/>
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-styles">
                        <Accrodion
                        className = "accordion__categories"
                        isNeedToHide
                        title = "Dress Style"
                        >
                            {stylesCategoriesItems.map((category,index) => (
                                <Select label={category.label} items={category.items} 
                                id={index + filtersCategoriesItems.length} onClick={isSelectExpanded} 
                                isExpanded = {indexSelectExpanded === index + filtersCategoriesItems.length} 
                                key={index}/>
                            ))}
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-actions">
                        <Button 
                        title = "Apply Filter"
                        className = "shop-products__filters-actions-button"
                        label ="Apply Filter"
                        type ="button"
                        onClick ={() => {}} 
                        mode="black"
                        />
                    </div>
                </aside>
                <div className="shop-products__main">
                        <div className="shop-products__type">
                            <span>Casual</span>
                            <div className="shop-products__type-sort">
                                <span>Showing 1-10 of 100 Products. Srt by:</span>
                                <Select label="Most popular"/>
                            </div>
                        </div>
                        <div className="shop-products__stuff">
                            <Slider 
                            className = "shop-products"
                            config={swiperConfig}
                            type="products">
                                {products}
                            </Slider>
                        </div>
                        <div className="shop-products__actions">
                            <button className="shop-products__actions-prev swiper-prev" />
                            <div className="shop-products__actions-pagination swiper-pagination"></div>
                            <button className="shop-products__actions-next swiper-next" />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default ShopProducts