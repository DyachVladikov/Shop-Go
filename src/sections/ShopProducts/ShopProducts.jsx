import Accrodion from "@/components/Accordion"
import "./ShopProducts.scss"
import Colors from "@/components/Colors"
import Sizes from "@/components/Sizes"
import Button from "@/components/Button"
import Scroll from "@/components/Scroll"
import Select from "@/components/Select"
import { useEffect, useState, useRef, useMemo, useCallback, memo } from "react"
import {Link, useNavigate, useParams } from "react-router-dom"
import Slider from "@/components/Slider"
import products from "@/collections/products/products"
import {createSwiperConfig} from "@/modules/SwiperConfig"
import { Navigation, Grid, Pagination} from "swiper/modules";
import classNames from "classnames"
import NavigationProduct from "@/components/NavigationProduct"

const ShopProducts = () => {
    const { category } = useParams();
    

    const [indexSelectExpanded, setIndexSelectExpanded] = useState(null)
    const [isFiltersVisibleMobile, setIsFiltersVisibleMobile] = useState(false)
    const [viewportWidth, SetviewportWidth] = useState(null)
    const [currentNameCategory, setCurrentNameCategory] = useState(category
        .charAt(0).toUpperCase() + category.slice(1))
    const [navigationPath, setNavigationPath] = useState([category
        .charAt(0).toUpperCase() + category.slice(1)])
    const [filterOptions, setFilterOptions] = useState({
        type: "",
        minPrice: 0,
        maxPrice: 10000,
        colors: [],
        sizes: [],
        dressStyle: "",
    })

    const scrollRef = useRef({
        minPrice: 20,
        maxPrice: 190,
    })
    const [filterProducts, setFilterProducts] = useState(products)

    const navigate = useNavigate()

    const filtersRef = useRef(null);


    useEffect(() => {
        window.addEventListener("resize", () => {SetviewportWidth(document.documentElement.clientWidth);
        }) 
    }, [viewportWidth])

    useEffect(() => {
        SetviewportWidth(document.documentElement.clientWidth)
        const mainHtml = document.querySelector("[data-js-main-page]")
        mainHtml?.classList.toggle("is-lock")
    },[])

    useEffect(() => {
        const header = document.querySelector("[data-js-header]")
        const mainHtml = document.querySelector("[data-js-main-page]")

        if(viewportWidth < 1024)
        {
            filtersRef.current?.classList.toggle("is-filters-visible");
            header?.classList.toggle("is-dark")
            
        }

        mainHtml?.classList.toggle("is-lock")

    }, [isFiltersVisibleMobile])

    const SwitchVisible = () => {
        setIsFiltersVisibleMobile((prev) => !prev)
    }

    const colors = [
        "#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", "#7D06F5", "#F506A4", "#fff", "#000"
    ]
    const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large" ]

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
    }

    const onClickItem = (nameTypeEl) => { 
        setCurrentNameCategory(nameTypeEl)
        navigate(`/shop/${nameTypeEl}`, {replace: true})
        setNavigationPath((prev) => {
            prev[0] = nameTypeEl
            return prev
        })
        setFilterOptions((prev) => ({
            ...prev,
            dressStyle: nameTypeEl
        }))
    }
    const onClickOption = (nameTypeEl, id) => {
        setNavigationPath((prev) => {
            prev[1] = nameTypeEl
            return prev
        })  
        isSelectExpanded(id)
        setFilterOptions((prev) => ({
            ...prev,
            type: nameTypeEl
        }))
    }

    //фильтрация
    const onScrollChange = useCallback((minPrice, maxPrice) => {
       scrollRef.current.maxPrice = maxPrice
       scrollRef.current.minPrice = minPrice
    }, [])
    const onColorChange = useCallback((currentColor) => {
        setFilterOptions((prev) => ({
            ...prev,
            colors: prev.colors.includes(currentColor) 
                ? prev.colors.filter(item => item !== currentColor)
                : [currentColor, ...prev.colors]
        }))
    }, [])
    const onSizeChoose = useCallback((currentSize) => {
        setFilterOptions((prev) => ({
            ...prev,
            sizes: prev.sizes.includes(currentSize) ? prev.sizes.filter((item) => item !== currentSize) : [currentSize, ...prev.sizes]
        }))
    }, [])

   const setFilteres = useCallback(() => {
    scrollRef.current.minPrice = scrollRef.current.minPrice;
    scrollRef.current.maxPrice = scrollRef.current.maxPrice;

    setFilterOptions((prev) => {
            const updatedFilterOptions = {
                ...prev,
                minPrice: scrollRef.current.minPrice,
                maxPrice: scrollRef.current.maxPrice
            };

            setFilterProducts(() => {
                const filtered = products.filter((product) => {
                    if (updatedFilterOptions.sizes.length > 0) {
                        return updatedFilterOptions.sizes.some(size => product.sizes.includes(size));
                    }
                    if(updatedFilterOptions.colors.length > 0){
                        return updatedFilterOptions.colors.some(color => product.colors.includes(color))
                    }
                    if(updatedFilterOptions.minPrice > product.cost || updatedFilterOptions.maxPrice < product.cost){
                        return false
                    } 
                    if(updatedFilterOptions.type != product.type && updatedFilterOptions.type != ""){
                        return false
                    }
                    if(updatedFilterOptions.dressStyle != product.dressStyle && updatedFilterOptions.dressStyle != ""){
                        return false
                    }
                    return true
                })
                return filtered;
            });

            return updatedFilterOptions;
        })
    }, [filterOptions])
    


    const swiperConfig = createSwiperConfig({
            prevSelector: ".swiper-prev",
            nextSelector: ".swiper-next",
            pagination: {
                selector: ".shop-products__actions-pagination",
                type: "custom-numbers",
                clickable: false,
                maxVisibleNumbers: 5, 
            },
            options: {
            modules: [Navigation, Grid, Pagination],
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
            spaceBetween: 16,
            grid: {
                rows: 3,
                fill: "row" 
            },
            breakpoints: {
                350: {
                slidesPerView: 2,
                slidesPerGroup: 3,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: "row" 
                },
                },
                767: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: "row" 
                },
                },
                1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: "row" 
                },
                },
                1280: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: "row" 
                },
                },

                1441: {
                slidesPerView: 4,
                slidesPerGroup: 4,
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
        <section className="shop-products container">
            <header className="shop-products__header">
                <h1 className="visually-hidden">Shop</h1>
                <NavigationProduct path={navigationPath} />
            </header>
            <div className="shop-products__body">
                <aside className={classNames("shop-products__filters", 
                    {"is-mobile-active" :viewportWidth < 1024 }
                    )} ref={filtersRef}>
                    <div className="shop-products__filters-categories">
                        <Accrodion
                        className = "accordion__categories"
                        isNeedToHide = {false}
                        onClose = {SwitchVisible}
                        title = "Filters"
                        isHrNeedAfterTitle
                        >
                            {filtersCategoriesItems.map((category, index) => (
                                <Select label={category.label} items={category.items} 
                                id={index} onClick={isSelectExpanded} 
                                isExpanded = {indexSelectExpanded === index} 
                                key={index} onClickItem = {() => {}}
                                onClickOption = {onClickOption}/>
                            ))}     
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-price">
                        <Accrodion
                        className = "accordion__price"
                        isNeedToHide
                        title = "Price"
                        >
                            <Scroll className="price" max={500} min={20} onScrollChange ={onScrollChange} />
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-colors">
                        <Accrodion
                        className = "accordion__colors"
                        isNeedToHide
                        title = "Colors"
                        >
                            <Colors colors={colors} onColorChange={onColorChange} selectedColors={filterOptions.colors}/>
                        </Accrodion>
                        
                    </div>
                    <div className="shop-products__filters-sizes">
                        <Accrodion
                        className = "accordion__sizes"
                        isNeedToHide
                        title = "Sizes"
                        >
                            <Sizes sizes={sizes} onSizeChoose={onSizeChoose} selectedSizes ={filterOptions.sizes}/>
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-styles">
                        <Accrodion
                        className = "accordion__categories" 
                        isNeedToHide
                        title = "Dress Style"
                        >
                            {stylesCategoriesItems.map((category,index) => (
                                <ol className="" key={index}>
                                    <Link to={`/shop/${category.label}`} ></Link>
                                    <Select label={category.label} items={category.items} 
                                    id={index + filtersCategoriesItems.length} onClick={isSelectExpanded} 
                                    isExpanded = {indexSelectExpanded === index + filtersCategoriesItems.length} 
                                    key={index} onClickItem = {onClickItem} onClickOption ={() => {}}/>
                                </ol>
                                
                            ))}
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-actions">
                        <Button 
                        title = "Apply Filter"
                        className = "shop-products__filters-actions-button"
                        label ="Apply Filter"
                        type ="button"
                        onClick ={() => {
                            setFilteres()
                        }} 
                        mode="black"
                        />
                    </div>
                </aside>
                <div className="shop-products__main">
                        <div className="shop-products__type">
                            <h2 className="shop-products__type-name">{currentNameCategory}</h2>
                            <div className="shop-products__type-sort">
                                <span>Showing 1-10 of 100 Products</span>
                                <span className="hidden-tablet">. Srt by:</span>
                                <Select className="popular hidden-tablet" label="Most popular"/>
                            </div>
                            <Button 
                            title = "Filters"
                            isLabelHidden
                            onlyIcon = {true}
                            iconLink = "/src/assets/icons/filters.svg"
                            className = "shop-products__filters-button visible-tablet"
                            type = "button"
                            onClick = {SwitchVisible}
                            />
                        </div>
                        <div className="shop-products__stuff">
                            <Slider 
                            className = "shop-products"
                            config={swiperConfig}
                            key={products.length}
                            type="products"
                            >
                                {filterProducts}
                            </Slider>
                        </div>
                        <div className="shop-products__actions">
                            <Button 
                            title = "previous slide"
                            iconLink = "/src/assets/icons/arrow-prev.svg"
                            className = "shop-products__actions-prev swiper-prev"
                            label = "Previous"
                            type = "button"
                            isIconBefore = "before"
                            />
                            <div className="shop-products__actions-pagination swiper-pagination"></div>
                            <Button 
                            title = "next slide"
                            iconLink = "/src/assets/icons/arrow-next.svg"
                            className = "shop-products__actions-next swiper-next"
                            label = "Next"
                            type = "button"
                            isIconBefore = "after"
                            />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default memo(ShopProducts)