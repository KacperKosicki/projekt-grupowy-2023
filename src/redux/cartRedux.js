/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const REMOVE_ALL_PRODUCTS = createActionName('REMOVE_ALL_PRODUCTS');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeCartProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const removeAllCartProducts = payload => ({
  payload,
  type: REMOVE_ALL_PRODUCTS,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    case REMOVE_ALL_PRODUCTS: {
      return {
        ...statePart,
        products: [],
      };
    }
    default:
      return statePart;
  }
}
