import classNames from "classnames"
import RatingView from "../RatingView"
import "./Comment.scss"
import Button from "../Button"

const Comment = (props) => {

    const {
        review = 5,
        nickName,
        description,
        hasOrdered,
        hasPoints,
        Posted,
    } = props

    return (
        <div className="comment">
            <div className="comment__rating-view-and-points">
                <RatingView className="comments" value = {review} hasLabel ={false}/>
                {hasPoints && (
                    <Button
                    title = "options"
                    isLabelHidden
                    onlyIcon
                    iconLink = "/src/assets/icons/points.svg"
                    className = "comment__button-options"
                    type = "button"
                    onClick = {() => {}} />
                )}
            </div>
            <div className="comment__body">
                <h5 className={classNames({"comment__user-nick-name" : !hasOrdered}, {"comment__user-nick-name--ordered" : hasOrdered})}>{`${nickName}.`}</h5>
                <p className="comment__user-text">
                    {description}
                </p>
                {Posted && (
                    <span className="comment__posted">{`Posted on ${Posted}`}</span>
                )}
            </div>
            
        </div>
    )
}

export default Comment