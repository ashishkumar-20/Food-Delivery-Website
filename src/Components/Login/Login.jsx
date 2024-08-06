import { assets } from '../../assets/assets';
import { useState } from 'react';
import './Login.css';
const Login = ({setShowLogin}) => {
    const [currState, setCurrState] = useState('Login');
    return (
        <div className="login-popup">
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {
                        currState==='Login'?<></>:<input type="text" name="" id=""placeholder='your name' required />
                    }
                    <input type="Email" placeholder='your email' required />
                    <input type='password' placeholder='Enter password' required/>
                </div>
                <button>{currState === 'Sign Up' ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" />
                    <p>By continuing , i agree to the terms of privacy policy.</p>
                </div>
                {
                    currState === 'Login' ? <p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                        : <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login</span></p>
                    
                }
            </div>
        </div>
    )
}
export default Login;