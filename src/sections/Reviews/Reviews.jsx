import "./Reviews.scss"
import { useState } from "react"
import RatingReviews from "@/components/RatingReviews"
import data from "./data.json"
import classNames from "classnames"

const Reviews = () => {

    const [indexActiveSection, setIndexActiveSection] = useState(1)

    const comments = data
    return(
        <section className="reviews container">
            <h2 className="visually-hidden">Reviews</h2>
            <div className="reviews__actions">
                <button className={classNames("reviews__actions-product-details", {"is-active": indexActiveSection === 0})}
                onClick={() => setIndexActiveSection(0)}
                >Product Details</button>
                <button className={classNames("reviews__actions-rating-reviews", {"is-active": indexActiveSection === 1})}
                onClick={() => setIndexActiveSection(1)}
                >Rating & Reviews</button>
                <button className={classNames("reviews__actions-FAQs", {"is-active": indexActiveSection === 2})}
                onClick={() => setIndexActiveSection(2)}
                >FAQs</button>
            </div>
            {indexActiveSection === 0 && (
                <span>Product Deatails</span>
            )}
            {indexActiveSection === 1 && (
                <RatingReviews title="All Reviews" comments={comments} />
            )}
            {indexActiveSection === 2 && (
                <span>FaQs</span>
            )}
        </section>
    )
}

export default Reviews