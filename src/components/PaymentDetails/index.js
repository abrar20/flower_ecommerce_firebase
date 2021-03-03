import React, { useState, useEffect } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
// import { apiInstance } from './../../Utils';
import { selectCartTotal, selectCartItemsCount, selectCartItems } from './../../redux/Cart/cart.selectors';
import { saveOrderHistory } from './../../redux/Orders/orders.actions';
import { clearCart } from './../../redux/Cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

const PaymentDetails = () => {
  const history = useHistory();
  const { total, itemCount, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');

  useEffect(() => {
    if (itemCount < 1) {
      history.push('/dashboard');
    }

  }, [itemCount]);

  const handleShipping = evt => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };



  const handleFormSubmit = async evt => {
    evt.preventDefault();


    if (
      !shippingAddress.line1 || !shippingAddress.city ||
      !shippingAddress.state || !shippingAddress.postal_code ||
      !shippingAddress.country || !recipientName 
    ) {
      return;
    }

          const configOrder = {
            orderTotal: total,
            orderItems: cartItems.map(item => {
              const { documentID, productThumbnail, productName,
                productPrice, quantity } = item;

              return {
                documentID,
                productThumbnail,
                productName,
                productPrice,
                quantity
              };
            }),
            recipientName,
            shippingAddress : {...shippingAddress}

          }

          dispatch(
            saveOrderHistory(configOrder)
          );
        

  }


  return (
    <div className="paymentDetails">
      <div className="container">
      <form onSubmit={handleFormSubmit}>

<div className="group">
  <h2>
    Shipping Address
  </h2>

  <FormInput
    required
    placeholder="Recipient Name"
    name="recipientName"
    handleChange={evt => setRecipientName(evt.target.value)}
    value={recipientName}
    type="text"
  />

  <FormInput
    required
    placeholder="Line 1"
    name="line1"
    handleChange={evt => handleShipping(evt)}
    value={shippingAddress.line1}
    type="text"
  />

  <FormInput
    placeholder="Line 2"
    name="line2"
    handleChange={evt => handleShipping(evt)}
    value={shippingAddress.line2}
    type="text"
  />

  <FormInput
    required
    placeholder="City"
    name="city"
    handleChange={evt => handleShipping(evt)}
    value={shippingAddress.city}
    type="text"
  />

  <FormInput
    required
    placeholder="State"
    name="state"
    handleChange={evt => handleShipping(evt)}
    value={shippingAddress.state}
    type="text"
  />

  <FormInput
    required
    placeholder="Postal Code"
    name="postal_code"
    handleChange={evt => handleShipping(evt)}
    value={shippingAddress.postal_code}
    type="text"
  />

  <div className="formRow checkoutInput">
    <CountryDropdown
      required
      onChange={val => handleShipping({
        target: {
          name: 'country',
          value: val
        }
      })}
      value={shippingAddress.country}
      valueType="short"
    />
  </div>

</div>

<Button className="btn first"
  type="submit"
>
  Place Order
</Button>

</form>
      </div>
    </div>
  );
}

export default PaymentDetails;
