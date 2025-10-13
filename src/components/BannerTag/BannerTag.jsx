import "./BannerTag.scss"

const BannerTag = (props) => {

    const {value, description} = props
    return(
        <div className="banner-tag">
            <span className="banner-tag__label">{value}</span>
            <p className="banner-tag__description">{description}</p>
        </div>
    )
}

export default BannerTag