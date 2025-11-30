import Button from "@/components/Button"
import "./Header.scss"
import closeButton from "@/assets/icons/closeButton.svg"
import { useState, useEffect, useContext} from "react"
import InputForm from "@/components/InputForm"
import stickyEffect from "@/modules/strickyEffect"
import LockPage from "@/modules/LockPage"
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { CountProductsContent } from "@/context/countProductsContext"
import classNames from "classnames"

const Header = () => {

    const navigate = useNavigate()
    const [isreg, setisReg] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const {countProduct} = useContext(CountProductsContent)

    useEffect(() => {
        stickyEffect(); 
    }, []);
    useEffect(() => {
        new LockPage(isModalOpen)
    }, [isModalOpen])

    const location = useLocation();

    const path = location.pathname

    const navigationList = [
        {
            label: "Shop",
            href: "/shop/casual",
        },
         {
            label: "On Scale",
            href: "/"
        },
         {
            label: "New Arrivals",
            href: "/"
        },
         {
            label: "Brands",
            href: "/"
        },
    ]

    function CloseSignForm() {
        setisReg(false)
    }

    function closeModal() {
        setIsModalOpen(prev => !prev)
    }
    const onBasketClick = () => {
        navigate("/order")
    }
    
    
    return (
        <>
            <div data-js-sticky-trigger></div>
            <header className="header" data-js-header="">
                <dialog className="header__modal" open={isModalOpen}>
                    <Button className="header__burger-button" 
                        type="button" 
                        isLabelHidden
                        title="close"   
                        iconLink = {closeButton}
                        onlyIcon
                        onClick = {closeModal}
                        mode="modal"
                    />
                    <nav className="header__modal-navigation">
                            <ul className="header__modal-navigation-list">
                                {navigationList.map((navigationItem, index) => (
                                    <li className="header__modal-navigation-item" key={index}>
                                        <Button className="header__navigation-link" {...navigationItem} type="button">
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                </dialog>
                {isreg && (
                        <div className="header__signUp ">
                            <div className="header__signUp-wrapper container">
                                <div className="header__signUp-content">
                                    <div className="header__signUp-title">
                                    <span>Sign up and get 20% off to your first order.</span>
                                    <Button className="header__signUp--link" 
                                    href="/" 
                                    label="Sign Up Now"
                                    title="sign"
                                    />
                                </div>
                                <Button className="header__signUp-button" 
                                type="button" 
                                isLabelHidden
                                title="close"   
                                iconLink = {closeButton}
                                onlyIcon
                                onClick = {CloseSignForm}
                                mode="small"
                                />
                                </div>
                                
                            </div>      
                    </div>
                )}
                <div className="header__inner container">
                    
                    <div className="header__body ">
                        <div className="header__body-wrapper">
                            <Button className="header__burger-button visible-tablet" 
                            type="button" 
                            isLabelHidden
                            title="open"   
                            iconLink = "/src/assets/icons/burgerButton.svg"
                            onlyIcon
                            onClick = {closeModal}
                            />
                            <div className="header__logo">
                                <Button className="header__logo-button" href="/">
                                    <img src="/src/assets/icons/logo.svg" alt="Logo" loading="lazy"/>
                                </Button>
                                
                            </div>
                    </div>      
                        <nav className="header__navigation">
                            <ul className="header__navigation-list">
                                {navigationList.map((navigationItem, index) => (
                                    <li className="header__navigation-item" key={index}>
                                        <Button className="header__navigation-link" {...navigationItem} type="button">
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="header__actions">
                            <InputForm className="header__actions-search hidden-mobile" 
                            iconLink = "/src/assets/icons/search.svg" 
                            title = "Search for products..."/>
                            <div className="header__actions-icons">
                                <Button className="search-button visible-mobile"
                                onlyIcon 
                                iconLink ="/src/assets/icons/search-black.svg"
                                type="button"
                                isLabelHidden />
                                <Button className="header__actions-basket-button"
                                onlyIcon 
                                iconLink ="/src/assets/icons/basket.svg"
                                type="button"
                                isLabelHidden 
                                onClick={() => {
                                    onBasketClick()
                                }}
                                >
                                    <div className={classNames("header__actions-basket-button-counter", {"is-ordered" : countProduct > 0})}>
                                        <span>{countProduct}</span>
                                    </div>
                                </Button>
                                
                                <Button className="user-button"
                                onlyIcon 
                                iconLink ="/src/assets/icons/user.svg"
                                type="button"
                                isLabelHidden />
                            </div>
                            
                        </div> 
                    </div>
                </div>
                {path != "/" && (
                    <div className="hr"/>
                )}
            </header>
        </>
    )
}

export default Header