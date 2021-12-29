import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import Context from '../../Context/Context';

const CartItem = ({ product }) => {
    const { image, title, description, price, category, id, qty } = product;

    const context = useContext(Context)
    const { removeItem, increment, decrement } = context;

    const history = useHistory()
    return (
        <>
            <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                <img src={image} className="img-fluid" alt="cart img" />
            </div>
            <div className="col-md-7 col-11 mx-auto px-4 mt-2 ">

                <div className="row">
                    <div className="col-12 card-title" onClick={() => history.push(`/products/${id}`)}>
                        <h1 className="mb-4 product_name" >{title} </h1>
                        <p className="mb-2">{description.slice(0, 200)}...</p>
                        <p className="mb-2"><strong>Category:</strong> {category}</p>
                    </div>
                    <div className="col-12">
                        <ul className="pagination justify-content-center set_quantity">
                            <li className="page-item">
                                <button className="page-link" disabled={qty <= 1} onClick={() => decrement(id)}>
                                    <i className="fas fa-minus"></i>
                                </button>
                            </li>
                            <li className="page-item">
                                <input type="text" name="" className="page-link" value={qty} id="textbox" readOnly />
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => increment(id)}>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 d-flex flex-column justify-content-center remove_wish">
                        <p className="small" onClick={() => removeItem(id)} style={{ cursor: 'pointer' }} ><i className="fas fa-trash-alt" ></i> REMOVE ITEM</p>
                        {/* <p className="small" style={{ cursor: 'pointer' }}><i className="fas fa-heart"></i> MOVE TO WISH LIST </p> */}
                    </div>
                    <div className="col-4 d-flex justify-content-end price_money">
                        <h3>₹<span id="itemval">{Math.round(price * qty)}</span></h3>
                    </div>
                </div>
            </div>
            <div className="my-3"></div>
            <hr />

        </>
    )
}

export default CartItem
