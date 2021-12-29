import React from 'react'

export const History = () => {
    const data = localStorage.getItem("Order")
    const items = JSON.parse(data)
    const CurDate = () => {
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let current_datetime = new Date()
        let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear()
        return formatted_date;
    }
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center fw-bold">Your Orders</h1>
                    </div>
                    {/* <div className="col-md-6" id="SearchButton">
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark ">Search</button>
                        </div>
                    </div> */}
                </div>
                <div className="row">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link " id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Orders</button>
                        </li>
                        <li className="nav-item " role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Not Shipped Yet</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">

                                <div className="col-md-2"><strong>S.no</strong></div>
                                <div className="col-md-3"><strong>Name</strong></div>
                                <div className="col-md-2"><strong>Qty</strong></div>
                                <div className="col-md-2"><strong>Total Price</strong></div>
                                <div className="col-md-3"><strong>Date</strong></div>
                                {
                                    localStorage.getItem('Order')
                                        ?
                                        items.map((item, index) => {
                                            return <div className="row" key={item.id}>
                                                <div className="col-md-1" >{index + 1}</div>
                                                <div className="col-md-4">{item.title}</div>
                                                <div className="col-md-2">{item.qty}</div>
                                                <div className="col-md-2">{item.price * item.qty}</div>
                                                <div className="col-md-3">{CurDate()}</div>
                                            </div>
                                        })
                                        :
                                        <h5 className='my-3'>No orders placed yet...</h5>
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    </div>
                </div>
            </div>
        </>
    )
}
