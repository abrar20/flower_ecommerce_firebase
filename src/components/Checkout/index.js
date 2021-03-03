import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from './../forms/Button';
import Item from './Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const Checkout = ({ }) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  const errMsg = 'You have no items in your cart.';

  return (
    <div className="checkout">
      <div className="container">
      <h1>
        Checkout
      </h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          cartItems.map((item, pos) => {
                          return (
                            <div key={pos}>
                              <Item {...item} />
                            </div>
                          );
                        })
        ) : (
            <p>
              {errMsg}
            </p>
          )}
          <div className="bottom-cart">
          <hr/>
          <div className="cart-total">
            <h4>
              total
              <span>SR {total}</span>
            </h4>
          </div>
          <div className="btns">
            <Button className="btn first" onClick={() => history.goBack()}>Continue Shopping</Button>
            <Button className="btn second" onClick={() => history.push('/payment')}>Checkout</Button>
          </div>
          </div>
          
      </div>
      </div>
    </div>
  );
};

export default Checkout;
