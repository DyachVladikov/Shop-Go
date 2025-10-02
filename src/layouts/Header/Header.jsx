import Button from "@/components/Button"
import "./Header.scss"
import closeButton from "@/assets/icons/closeButton.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner content">
                <div className="header__signUp">
                    <div className="header__signUp-title">
                        <span>Sign up and get 20% off to your first order.</span>
                        <Button className="header__signUp--link" 
                        href="/" 
                        label="Sign Up Now"
                        title="sign"
                        />
                    </div>
                    <Button className="header__signUp-button" 
                    type="button" 
                    isLabelHidden
                    IconOnly
                    title="close"   
                    icon = {closeButton}
                    onlyIcon
                    />
                </div>
                <div className="header__body"></div>
            </div>
        </div>
    )
}

export default Header