import { useState, useRef } from "react"
import Button from "../Button"
import Comment from "../Comment"
import "./RatingReviews.scss"

const RatingReviews = (props) => {

    const {
        className,
        title,
        actions,
        comments = [],
    } = props

    const [showMore, setShowMore] = useState(false)
    const [countActiveComments, setCountActiveComments] = useState(6)
    const targetScrollref = useRef(null);

    const offsetComments = comments.length > 999 ? -60 : -30

    const activeComments = showMore ? comments : comments.slice(0, countActiveComments)

    const  handleButtonMoreClick = () => {
        if(comments.length >= activeComments.length + 4)
            setCountActiveComments((prev) => prev += 4);
        else if(showMore)
        {
            setCountActiveComments(6)
            setShowMore((prev) => !prev)
            ScrollToTarget()
        }
            
        else
        {
            setShowMore((prev) => !prev)
            
        }
    }

    const ScrollToTarget = () => {
        targetScrollref.current.scrollIntoView({ behavior: "smooth" });
    }
        
    return (
        <div className="rating-reviews" 
        style={{"--countComments": `"${comments.length}"`, 
        "--offsetComment": offsetComments}}
        >
            <div className="rating-reviews__header" ref={targetScrollref}>
                <h2 className="rating-reviews__header-title" >{title}</h2>
                <div className="rating-reviews__header-actions">
                    <Button 
                    title ="options"
                    isLabelHidden
                    className = "rating-reviews__header-actions--options"
                    onlyIcon
                    iconLink = "/src/assets/icons/options.svg"
                    type = "button"
                    onClick = {() => {}}
                    mode = "gray"
                    />
                    <Button 
                    title ="Latest"
                    label = "Latest"
                    type = "button"
                    className = "rating-reviews__header-actions--latest"
                    onClick = {() => {}}
                    mode = "gray"
                    />
                    <Button 
                    title ="Write a Review"
                    label = "Write a Review"
                    type = "button"
                    onClick = {() => {}}
                    mode = "black"
                    className= "rating-reviews__header-actions--review"
                    />
                </div>
            </div>
            <div className="rating-reviews__body">
                <ul className="rating-reviews__body-list">
                    {activeComments.map((comment,index) => (
                        <li className="rating-reviews__body-item" key={index}>
                            <Comment {...comment} hasPoints className="rating-reviews__comment"/>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="rating-reviews__footer">
                <Button 
                title ="Load More Reviews"
                label = {showMore  ? "Hide" : "Load More Reviews"}
                type = "button"
                onClick = {() => {
                    handleButtonMoreClick(countActiveComments)
                }}
                />
            </div>
        </div>
    )
}

export default RatingReviews