import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import Modal from '../../components/Modal/index';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import Button from '../../components/forms/Button';
import Spinner from '../../components/Spinner/Spinner'
import LoadMore from '../../components/LoadMore';
import CKEditor from 'ckeditor4-react';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
  loading: productsData.loading
});

const Admin = props => {
  const { products, loading } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus ducimus suscipit quasi sapiente culpa ipsam magnam dolore quisquam velit. Deleniti ad soluta nam dicta.');

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('mens');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    // setProductDesc('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    resetForm();

  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button className="btn third" onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={[{
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
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />

            <CKEditor

              onChange={evt => setProductDesc(evt.editor.getData())}
            />

            <br />

            <Button className="btn first" type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>

      <div className="manageProducts">
        <div className="head"><h1>Manage Product</h1></div>
        <div className="products-admin">
        {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                      
                        <div className="product-admin" key={index}>
                          <img className="thumb" src={productThumbnail} />
                          <h5>{productName}</h5>
                          <span>SR {productPrice}</span>
                          <Button className="btn first" onClick={() => dispatch(deleteProductStart(documentID))}>
                              Delete
                            </Button>
                        </div>
                      
                      )})}
        </div>
        <div >
        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                        )}
        </div>

      </div>

    </div>
  );
}

export default Admin;