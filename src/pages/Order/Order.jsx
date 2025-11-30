import OrderCard from "@/sections/OrderCard"
import "./Order.scss"
import BasketCotrollerContextProvider from "@/context/basketControllerContext"


const Order = () => {

    return (
        <BasketCotrollerContextProvider>
            <OrderCard />
        </BasketCotrollerContextProvider>
    )
}

export default Order