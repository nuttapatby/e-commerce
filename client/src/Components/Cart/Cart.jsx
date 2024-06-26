import React from 'react'
import './Cart.scss'
import {useDispatch, useSelector} from 'react-redux'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeItem, resetCart } from '../../Redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from '../../makeRequest'

const Cart = () => {

  const products = useSelector(state => state.cart.products);
  
  const dispatch = useDispatch();
  
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => total += (item.quantity*item.price))
    return total.toFixed(2);
  };
  
  const stripePromise = loadStripe('pk_test_51PN8I3K6g3Cttwoq7BLM5L3vHiAnbS4ZU5M7ceKic3GKIsJHUIZzoD0xuhlKfBjW9LMztvM9wSyMnJflGcj4GDqp00IIFeoNXb');
  const handlePayment = async ()=>{
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.image} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price"> {item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete' onClick={()=> dispatch(removeItem(item.id))} />
            </div>
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TI CHECKOUT</button>
        <span className='reset' onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart