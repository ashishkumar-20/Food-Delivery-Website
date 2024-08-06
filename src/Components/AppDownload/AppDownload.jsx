import { assets } from '../../assets/assets';
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div className="app-download" id="app-download">
            <h2>For Better Experience Download <br /> Tomato app.</h2>
            <div className="app-download-platform">
                <a href='https://playstore.com' target='_blank' ><img src={assets.play_store} alt="" /></a>
                <a href='https://google.com' target='_blank' ><img src={assets.app_store} alt="" /> </a>
            </div>
        </div>
    )
}
export default AppDownload;