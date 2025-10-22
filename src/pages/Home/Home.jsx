import Banner from "@/sections/Banner"
import "./Home.scss"
import DressStyle from "@/sections/DressStyle"
import Stuff from "@/sections/Stuff"
import Customers from "@/sections/Customers"

const Home = () => {

    return (
        <>
            <Banner />
            <Stuff />
            <DressStyle/>
            <Customers />
        </>
    )
}

export default Home