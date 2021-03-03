import React from 'react'

export default function OrderItem(orderItem) {
    const {
        productName,
        productThumbnail,
        productPrice,
        quantity,
      } = orderItem;
    return (
        <div className="order-item">
      <img src={productThumbnail} alt={productName}/>
      <div className="item-content">
        <h4>{productName}</h4>
      </div>
      <div>
          <h4>SR {productPrice}</h4>
      </div>
      <div className="item-quantity">
        <p>{quantity}</p>
      </div>
    </div>
    )
}
