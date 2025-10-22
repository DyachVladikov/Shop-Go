import classNames from "classnames"
import RatingView from "../RatingView"
import "./Comment.scss"

const Comment = (props) => {

    const {
        review = 5,
        nickName,
        description,
        hasOrdered,
    } = props

    return (
        <div className="comment">
            <RatingView className="comments" value = {review} hasLabel ={false}/>
            <h5 className={classNames({"comment__user-nick-name" : !hasOrdered}, {"comment__user-nick-name--ordered" : hasOrdered})}>{`${nickName}.`}</h5>
            <p className="comment__user-text">
                {description}
            </p>
        </div>
    )
}

export default Comment