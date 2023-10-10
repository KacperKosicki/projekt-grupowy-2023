//selectors
export const getScreenMode = state => state.screenMode;

// actions
const createActionName = actionName => `app/screenMode/${actionName}`;
const EDIT_MODE = createActionName('EDIT_POST');

// action creators
export const editMode = payload => ({ type: EDIT_MODE, payload });

const screenModeReducer = (statePart = '', action) => {
  switch (action.type) {
    case EDIT_MODE:
      return action.payload;
    default:
      return statePart;
  }
};

export default screenModeReducer;
