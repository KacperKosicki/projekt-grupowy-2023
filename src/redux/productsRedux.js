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
const TOGGLE_TO_COMPARE = createActionName('TOGGLE_TO_COMPARE');

/* action creators */
export const toggleToCompare = payload => ({ type: TOGGLE_TO_COMPARE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_TO_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, comparison: !product.comparison }
          : product
      );
    default:
      return statePart;
  }
}
