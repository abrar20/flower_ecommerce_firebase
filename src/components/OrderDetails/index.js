import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderDetails } from './../../redux/Orders/orders.actions';
import OrderItem from './OrderItem/OrderItem';
import './OrderDetails.scss';
import Spinner from '../Spinner/Spinner';

const mapState=({ordersData})=>({
  loading: ordersData.loading
})

const OrderDetails = ({ order }) => {
  const {loading} =useSelector(mapState);
  const dispatch = useDispatch();
  const orderItems = order && order.orderItems;

  useEffect(() => {
    return () => {
      dispatch(
        setOrderDetails({})
      );
    }
  }, []);

  if (loading){
    return <Spinner/>;
  }

  return (
      <div className="container">

        <div className="orderDetails">
        {(Array.isArray(orderItems) && orderItems.length > 0) && orderItems.map((orderItem, pos) => {
            return (
              <div key={pos}>
                <OrderItem {...orderItem}/>
              </div>
            )
        })}
        
        </div>
    </div>
  )
}

export default OrderDetails;
