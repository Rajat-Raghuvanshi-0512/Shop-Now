import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import Context from '../../Context/Context';
import Alert from '../Alert/Alert';
import CartItem from './CartItem';

const Cart = () => {
    const context = useContext(Context)
    const history = useHistory()
    const { items, clearCart, totalItems, totalAmount, shipping } = context;
    // console.log(items);

    const razorPayPaymentHandler = async () => {
        try {
            const API_URL = `http://localhost:5000/razorpay/`
            const orderUrl = `${API_URL}order`;
            const response = await fetch(orderUrl);
            const data = response.json();
            // console.log("App -> razorPayPaymentHandler -> data", data)

            const options = {
                key: 'rzp_test_PIcLpeB8wMLalg',
                name: "Safe Pay",
                description: "Modern and easy way for online transaction",
                order_id: data.id,
                amount: Math.round(totalAmount * 100) + (shipping * 100),
                handler: async (response) => {
                    try {
                        const paymentId = response.razorpay_payment_id;
                        const url = `${API_URL}capture/${paymentId}`;
                        const captureResponse = await fetch(url, { method: "POST" })
                        const successObj = JSON.parse(captureResponse.data)
                        const captured = successObj.captured;
                        // console.log("App -> razorPayPaymentHandler -> captured", successObj)
                        if (captured) {
                            console.log('success')
                        }

                    } catch (err) {
                        console.log(err);
                    }
                },
                theme: {
                    color: "#686CFD",
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (err) {
            // console.log(err);
            history.push('/')
        }
    }
    const COD = () => {
        Alert("Success", "Order Placed Successfully")
        localStorage.setItem("Order", JSON.stringify(items))
        clearCart();

    }

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "whitesmoke" }}>
                <div className="row">
                    <div className="col-md-10 col-11 mx-auto">
                        <div className="row mt-5 gx-3">
                            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                                <div className="card p-4">
                                    <h1 className="py-4 font-weight-bold">Cart ({totalItems} items)</h1>
                                    <div className="row">
                                        {items.length === 0
                                            ?
                                            <h5 onClick={() => history.push("/")}>Add items to show in the cart....</h5>
                                            :
                                            items.map((item, index) => {
                                                return <CartItem product={item} key={index} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                                <div className="right_side p-3 shadow bg-white">
                                    <h3 className=" mb-4 d-flex justify-content-center "><strong>Grand total</strong></h3>
                                    <div className="price_indiv d-flex justify-content-between">
                                        <p>Product amount</p>
                                        <p>₹<span id="product_total_amt">{totalAmount}</span></p>
                                    </div>
                                    <div className="price_indiv d-flex justify-content-between">
                                        <p>Shipping Charge</p>
                                        <p>₹<span id="shipping_charge">{shipping}</span></p>
                                    </div>
                                    <hr />
                                    <div className="total-amt d-flex justify-content-between font-weight-bold">
                                        <p>Total amount: </p>
                                        <p>₹<span id="total_cart_amt">{totalAmount + shipping}</span></p>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <button className="btn btn-primary text-uppercase"
                                            disabled={!totalAmount} onClick={razorPayPaymentHandler}>Checkout</button>
                                        <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
                                    </div>
                                    <div className="d-flex justify-content-around mt-3">
                                        <button className="btn btn-dark text-uppercase" disabled={!totalAmount} onClick={COD}>Cash on Delivery</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart