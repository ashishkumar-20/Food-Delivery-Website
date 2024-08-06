import { useContext} from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <form className="place-Order">
            <div className="place-Order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='street' />
                <div className="multi-fields">
                    <input type="text" placeholder='city' />
                    <input type="text" placeholder='state' />
                </div>
                 <div className="multi-fields">
                    <input type="text" placeholder='pincode' />
                    <input type="text" placeholder='country' />
                </div>
                <input type="text" placeholder='phone' />
            </div>
            <div className="place-order-right">
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
                            <p>${getTotalCartAmount()===0?0:3}</p>
                        </div>
                        <hr />
                        <div className="cart-totals-details">
                            <p>Totals</p>
                            <p>${getTotalCartAmount()===0? 0: getTotalCartAmount()+3}</p>
                        </div>
                        <hr />
                        <button>PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default PlaceOrder;