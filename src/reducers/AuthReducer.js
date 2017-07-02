import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.palyoad };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state,
        loading: true,
        error: ''
      };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_USER_FAILURE:
      return { ...state,
        password: '',
        loading: false,
        error: 'Autnetication Failed.',
      };
    default:
      return state;
  }
};
