import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from './../../../redux/Cart/cart.actions';

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productThumbnail,
    productName,
    productPrice
  } = product;
  if (!documentID || !productThumbnail || !productName ||
    typeof productPrice === 'undefined') return;

  const configAddToCartBtn = {
    type: 'button'
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  };

  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
        <div className="product-actions">
          <span title="Add To Cart"><i className="fas fa-shopping-cart" onClick={() => handleAddToCart(product)}></i></span>
          <span><Link to={`/product/${documentID}`} title="Quick View"><i className="fas fa-search-plus"></i></Link></span>
        </div>
      </div>

      <div className="product-content">
        
            <h4>
                {productName}
            </h4>
          
            <span className="price">
              SR {productPrice}
            </span>
      </div>

    </div>
  );
};

export default Product;