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
        <div className={classNames("rating-view", 
            {"rating-view--comments" : className === "comments"},
            {"rating-view--banner" : className === "banner"}
        )} 
        aria-label={ariaLabel} 
        title={ariaLabel}
        style={{"--ratingViewValue" : value}}
        >
            <div className={classNames("rating-view__stars", {"rating-view__stars--comments" : className === "comments"},
                 {"rating-view__stars--banner" : className === "banner"}
            )}>
                <img className="rating-view__stars-filled" 
                src="/src/assets/icons/stars.svg"
                width={98}
                height={18}
                alt=""/>
            </div>
            {hasLabel && (
                <div className={classNames("rating-view__label",{"rating-view__label--banner" : className === "banner"})}>{viewLabel}</div>
            )}
            
        </div>
    )
}

export default RatingView