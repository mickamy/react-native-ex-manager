import {
  UPDATE_EMPLOYEE,
} from '../actions';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE: {
      const { prop, value } = action.payload;
      return { ...state,
        [prop]: value,
      };
    }
    default:
      return state;
  }
};
