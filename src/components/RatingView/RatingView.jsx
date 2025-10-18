import "./RatingView.scss"

const RatingView = (props) => {

    const {value = 5} = props

    const ariaLabel = `Rating ${value} stars`

    const viewLabel = `${value}/5`


    return (
        <div className="rating-view" 
        aria-label={ariaLabel} 
        title={ariaLabel}
        style={{"--ratingViewValue" : value}}
        >
            <div className="rating-view__stars">
                <img className="rating-view__stars-filled" 
                src="/src/assets/icons/stars.svg"
                width={98}
                height={18}
                alt=""/>
            </div>
            <div className="rating-view__label">{viewLabel}</div>
        </div>
    )
}

export default RatingView