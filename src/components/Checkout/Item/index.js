import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../forms/Button';
import { removeCartItem, addProduct, reduceCartItem } from './../../../redux/Cart/cart.actions';

const Item = (product) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    );
  }

  const handleAddProduct = (product) => {
    dispatch(
      addProduct(product)
    )
  }

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    );
  }

  return (
    <div className="cart-item">
      <img src={productThumbnail} alt={productName}/>
      <div className="item-content">
        <h4>{productName}</h4>
        <h4 className="item-price">SR {productPrice}</h4>
        <Button className="btn load" onClick={() => handleRemoveCartItem(documentID)}>remove</Button>
      </div>
      <div className="item-quantity">
        <Button className="amount-btn" onClick={() => handleAddProduct(product)}>+</Button>
        <p>{quantity}</p>
        <Button className="amount-btn" onClick={() => handleReduceItem(product)} >-</Button>
      </div>
    </div>
  );
}

export default Item;
