import React, { useContext } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Context from '../../Context/Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardItem = (props) => {

    const context = useContext(Context)
    const { addItem } = context;

    const handleOnClick = (card) => {
        addItem({ ...card, qty: 1, price: card.price });
        toast.success("Item added to cart!");
    }

    return (
        <>
            <div className="card  px-2 my-2">
                <Link to={`/products/${props.id}`}>
                    <img src={props.image} className="card-img-top" alt="Not available" />
                </Link>
                <div className="card-body">
                    <Link className="card-link" to={`/products/${props.id}`}>
                        <h4 className="card-title" >{props.title}...</h4>
                        <p className="card-text">{props.desc}...</p>
                    </Link>
                    <h4 className="mt-3">₹ {props.price}</h4>
                    <div>{
                        <ReactStars
                            count={5}
                            value={props.rating}
                            size={34}
                            isHalf={true}
                            activeColor="#ffd700"
                            edit={false}
                        />}
                    </div>
                    <button className="btn btn-dark" onClick={() => handleOnClick(props.card)} >Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default CardItem
