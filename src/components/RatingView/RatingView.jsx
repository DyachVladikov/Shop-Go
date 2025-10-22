import classNames from "classnames"
import "./RatingView.scss"

const RatingView = (props) => {

    const {
    value = 5,
    hasLabel = true,
    className,
    } = props

    const ariaLabel = `Rating ${value} stars`

    const viewLabel = `${value}/5`


    return (
        <div className={classNames("rating-view", {"rating-view--comments" : className})} 
        aria-label={ariaLabel} 
        title={ariaLabel}
        style={{"--ratingViewValue" : value}}
        >
            <div className={classNames("rating-view__stars", {"rating-view__stars--comments" : className})}>
                <img className="rating-view__stars-filled" 
                src="/src/assets/icons/stars.svg"
                width={98}
                height={18}
                alt=""/>
            </div>
            {hasLabel && (
                <div className="rating-view__label">{viewLabel}</div>
            )}
            
        </div>
    )
}

export default RatingView