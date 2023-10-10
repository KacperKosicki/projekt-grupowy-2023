/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getComparedProducts = ({ products }) =>
  products.filter(product => product.comparison === true);

/* actions */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const TOGGLE_TO_COMPARE = createActionName('TOGGLE_TO_COMPARE');
const REMOVE_FROM_COMPARISON = createActionName('REMOVE_FROM_COMPARISON');
const INITIALIZE_PRODUCTS = createActionName('INITIALIZE_PRODUCTS');

/* action creators */
export const toggleProductFavorite = payload => ({
  type: TOGGLE_PRODUCT_FAVORITE,
  payload,
});
export const toggleToCompare = payload => ({ type: TOGGLE_TO_COMPARE, payload });
export const removeFromComparison = payload => ({
  type: REMOVE_FROM_COMPARISON,
  payload,
});
export const initializeProducts = () => ({ type: INITIALIZE_PRODUCTS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    case TOGGLE_TO_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, comparison: !product.comparison }
          : product
      );
    case REMOVE_FROM_COMPARISON:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, comparison: false } : product
      );
    case INITIALIZE_PRODUCTS:
      return statePart.map(product => ({ ...product, comparison: false })); // Ustawiam wszystkie produkty na false
    default:
      return statePart;
  }
}
