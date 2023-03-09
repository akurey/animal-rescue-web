import { ACTION_GET_ADDRESS_LIST } from "../../constants/reduce-actions.constant";

// eslint-disable-next-line
export const addressAction = {
  getAddress: (provinces) => {
    return {
      type: ACTION_GET_ADDRESS_LIST,
      // eslint-disable-next-line
      provinces: provinces,
    };
  },
};
