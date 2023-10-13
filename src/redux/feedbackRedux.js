/* selectors */
export const getAll = ({ feedback }) => feedback;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
