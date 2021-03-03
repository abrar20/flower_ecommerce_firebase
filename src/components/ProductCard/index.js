import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import Button from './../forms/Button';
import './styles.scss';

const mapState = state => ({
  product: state.productsData.product
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productThumbnail,
    productName,
    productPrice,
    productDesc,
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  }

  const configAddToCartBtn = {
    type: 'button'
  }

  return (
    <div className="container">
      <div className="hero">
        <img src={productThumbnail} />
        <div className="productDetails">
            <h1>
              {productName}
            </h1>
            <span className="price-details">
              SR {productPrice}
            </span>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }} />

            <div className="addToCart">
              <Button className="btn third" {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>

      </div>
      </div>
      
    </div>
  );
}

export default ProductCard;
