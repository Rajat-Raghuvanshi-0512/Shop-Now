import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router';
import ReactStars from "react-rating-stars-component";
import Context from '../../Context/Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

    const context = useContext(Context)
    const { products, addItem } = context;
    const history = useHistory();
    const { id } = useParams();

    const handleOnClick = (card) => {
        addItem({ ...card, qty: 1, price: Math.round(card.price * 50) })
        history.push(`/cart`)
    }
    const AddtoCart = (card) => {
        addItem({ ...card, qty: 1, price: Math.round(card.price * 50) })
        toast.success("Item added to cart!");
    }

    return (
        <>
            {products.filter((c) => { return c.id.toString() === id.toString() }).map((card, index) => {
                return (
                    <>
                        <div className="row  my-5" key={index}>
                            <div className="col-md-6">
                                <img className="large-img" src={card.image} alt={card.title} />
                            </div>
                            <div className="col-md-6 ">
                                <ul className="list-unstyled">
                                    <li>
                                        <h1>{card.title}</h1>
                                    </li>
                                    <li>
                                        {
                                            <ReactStars
                                                count={5}
                                                value={card.rating.rate}
                                                size={50}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                                edit={false}
                                            />}<h6 className="mx-1">Reviews: {card.rating.count}</h6>
                                    </li>
                                    <li><h3 className="my-4">Price: ₹{Math.round(card.price * 50)}</h3></li>
                                </ul>
                                <div className="d-flex">
                                    <button className="btn btn-secondary cart-btn mx-2" onClick={() => AddtoCart(card)}>Add to Cart</button>
                                    <button className="btn btn-dark cart-btn mx-2" onClick={() => handleOnClick(card)}>Buy now</button>
                                </div>
                                <p className="my-4"><strong> Description: </strong> {card.description}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Product;
