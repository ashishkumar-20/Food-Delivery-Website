import { assets } from '../../assets/assets';
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-contents">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dolorem, eaque delectus voluptas aspernatur quo fugit quidem ipsam impedit tenetur aliquid debitis? Consequuntur blanditiis a assumenda unde aperiam ad itaque!</p>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com" target="_blank"><img src={assets.facebook_icon} alt="" /></a>
                        <a href="https://twitter.com" target="_blank"><img src={assets.twitter_icon} alt="" /></a>
                        <a href="https://linkedin.com" target="_blank"><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 214-5893-675</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr  />
            <p className="footer-copyright">
                CopyRight 2024 @tomato.com All rights are reserved.
            </p>

        </div>
    )
}
export default Footer;