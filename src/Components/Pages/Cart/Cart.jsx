import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Item</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id]>0) {
                            return (
                                <div>
                                    <div className="cart-items-title cart-items-item">
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
                                    </div>
                                    <hr />
                                </div>
                            )}
                    })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-totals-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-totals-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()===0? 0: 3}</p>
                        </div>
                        <hr />
                        <div className="cart-totals-details">
                            <p>Totals</p>
                            <p>${getTotalCartAmount()=== 0 ? 0: getTotalCartAmount()+3}</p>
                        </div>
                        <hr />
                        <button onClick={()=>navigate('/PlaceOrder')}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className="cart-promocode">
                         <p>If you have promcode enter it here..</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Cart;