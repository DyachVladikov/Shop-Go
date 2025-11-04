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

    const offsetComments = comments.length > 999 ? -60 : -30
    return (
        <div className="rating-reviews" 
        style={{"--countComments": `"${comments.length}"`, 
        "--offsetComment": offsetComments}}
        >
            <div className="rating-reviews__header">
                <h2 className="rating-reviews__header-title">{title}</h2>
                <div className="rating-reviews__header-actions">
                    <Button 
                    title ="options"
                    isLabelHidden
                    className = "rating-reviews__header-actions--options"
                    onlyIcon
                    iconLink = "src/assets/icons/options.svg"
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
                    />
                </div>
            </div>
            <div className="rating-reviews__body">
                <ul className="rating-reviews__body-list">
                    {comments.map((comment,index) => (
                        <li className="rating-reviews__body-item" key={index}>
                            <Comment {...comment} hasPoints/>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="rating-reviews__footer">
                <Button 
                title ="Load More Reviews"
                label = "Load More Reviews"
                type = "button"
                onClick = {() => {}}
                />
            </div>
        </div>
    )
}

export default RatingReviews