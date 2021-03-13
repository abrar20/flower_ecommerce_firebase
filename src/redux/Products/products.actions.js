import productsTypes from './products.types';

export const addProductStart = productData => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  payload: productData
});

export const fetchProductsStart = (filters={}) => ({
  type: productsTypes.FETCH_PRODUCTS_START,
  payload: filters
});

export const setProducts = products => ({
  type: productsTypes.SET_PRODUCTS,
  payload: products
});

export const fetchSomeProductsStart = (limitNum) => ({
  type: productsTypes.FETCH_SOME_PRODUCTS_START,
  payload: limitNum
});
export const fetchFooterProductStart = (limitNum) => ({
  type: productsTypes.FETCH_FOOTER_PRODUCT_START,
  payload: limitNum
});
export const setFooterProduct = footerProduct => ({
  type: productsTypes.SET_FOOTER_PRODUCT,
  payload: footerProduct
});

export const setSomeProducts = someProducts => ({
  type: productsTypes.SET_SOME_PRODUCTS,
  payload: someProducts
});

export const deleteProductStart = productID => ({
  type: productsTypes.DELETE_PRODUCT_START,
  payload: productID
});

export const fetchProductStart = productID => ({
  type: productsTypes.FETCH_PRODUCT_START,
  payload: productID
});

export const setProduct = product => ({
  type: productsTypes.SET_PRODUCT,
  payload: product
});