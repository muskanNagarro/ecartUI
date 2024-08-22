import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = ({order}) => {
  const lastOrder = [order[order.length-1]];
    return (
      <div className="a-box a-alert-inline a-alert-inline-success" aria-live="polite" aria-atomic="true">
          <h4 className="a-alert-heading">Order placed, thank you!</h4>
          <h6 className="a-alert-heading">Go to <Link to={"/order-detail"}>Your Orders</Link> for more details</h6>
          {
          lastOrder.map((orderDetail) => { 
            return(
        <div key={orderDetail.orderId} className="card mb-3 my-5 mg-auto" style={{width: "800px"}}>
        <div className="container my-5 ">
            <div style={{width: "700px"}} className="mg-auto">
                {/* <h4 style={{float: "left"}} >OrderId : <span style={{color: "green"}}>{orderDetail.orderId}</span> </h4> */}
                <h4 style={{float: "right"}}>Total Amount: <span style={{color: "green"}}>{orderDetail.totalAmount} ₹</span> </h4>
            </div>
        {
            orderDetail.cart.map((product) => {
            return(
            <>
            <div key={product.id} className="card mb-3 my-5 mg-auto" style={{width:'700px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">
                                    {product.price} ₹
                                </button>
                </div>
                </div>
            </div>
            </div>
                    </>
                    )
            })}
        </div>
        </div>
        )})
          }
      </div>
  )
}
export default OrderSuccess;