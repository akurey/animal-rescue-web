import { ACTION_SET_USER } from "../../constants/reduce-actions.constant";

const initialSate = {
  user: {},
};

// eslint-disable-next-line
export const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ACTION_SET_USER:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};
