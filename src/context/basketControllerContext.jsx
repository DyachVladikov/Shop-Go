import products from "@/collections/products/products";
import { use } from "react";
import {useEffect, createContext, useState } from "react";

export const BasketCotrollerContext = createContext()

const basketCotrollerContextProvider = ({children}) => {

    const [totalPrice, setTotalPrice] = useState(null)

    const [totalDiscount, setTotalDiscount] = useState(0)

    useEffect(() => {
    const productsIdInBasket = JSON.parse(localStorage.getItem("cart") || "[]")
    
    if(productsIdInBasket.length > 0)
    {
        let total = 0;
        let totalDiscountAmount = 0;
        
        productsIdInBasket.forEach(basketItem => {
            const product = products.find(p => p.id.toString() === basketItem.id.toString());
            if (product) {
                const itemTotal = product.cost * basketItem.qty;
                total += itemTotal;
                
                if (product.discount && product.discount > 0) {
                    const itemDiscount = (itemTotal * product.discount) / 100;
                    totalDiscountAmount += itemDiscount;
                }
            }
        });
        
        setTotalPrice(total);
        
        setTotalDiscount(totalDiscountAmount); 
        
    }
    
}, [totalPrice])

    

    return (
        <BasketCotrollerContext.Provider value={{
            totalPrice, setTotalPrice, totalDiscount, setTotalDiscount
        }}>
            {children}
        </BasketCotrollerContext.Provider>
    )
}

export default basketCotrollerContextProvider