import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Product from './Product';
import FormSelect from '../forms/FormSelect';
import LoadMore from '../LoadMore';
import './styles.scss';
import Spinner from '../Spinner/Spinner';

const mapState = ({ productsData }) => ({
  products: productsData.products,
  loading: productsData.loading
});

const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products,loading } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/products/${nextFilter}`);
  };

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    },{
      value: "vase",
      name: "Vase"
    },{
      value: "domes",
      name: "Domes"
    },
    {
      value: "bridal",
      name: "Bridal"
    },
    {
      value: "graduation",
      name: "Graduation"
    },
    {
      value: "giving-birth",
      name: "Giving-Birth"
    },
    {
      value: "mother day",
      name: "Mother Day"
    },
    {
      value: "valentine",
      name: "Valentine"
    }],
    handleChange: handleFilter
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <FormSelect {...configFilters} />
        <p>
          No Products results.
        </p>
      </div>
    );
  }

  
  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    )
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  if (loading){
    return <Spinner/>;
  }
  
  return (
    <div className="products">

      <h1>
        Browse Products
      </h1>

      <FormSelect {...configFilters} />

      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            ...product
          };

          return (
            <Product key={pos} {...configProduct} />
          );
        })}
      </div>

      {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )}

    </div>
  );
};

export default ProductResults;
