import React, { useEffect, useContext } from 'react'
import CardItem from '../Cards/CardItem'
import Context from '../../Context/Context'

function Home({ category, limit }) {

    const context = useContext(Context);
    const { products, setProducts, setProgress } = context;

    const api = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${category ? `category/${category}` : ""}?limit=${limit ? limit : `999?sort=asc`}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        setProgress(30)
        let data = await res.json();
        setProgress(70)
        setProducts(data);
        setProgress(100)
    }
    useEffect(() => {
        api();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="container">
                <h1 className="text-capitalize text-center main_heading my-3 py-2" >{category ? category : "All Products"}</h1>
                <div className="row">
                    {products.map((card) => {
                        return <div className="col-md-4" key={card.id}>
                            <CardItem card={{ ...card, price: Math.round(card.price * 50) }} title={card.title ? card.title.slice(0, 35) : "Title not available"} desc={card.description ? card.description.slice(0, 75) : "Description not available"} image={card.image} price={Math.round(card.price * 50)} rating={card.rating.rate} id={card.id} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
export default Home
