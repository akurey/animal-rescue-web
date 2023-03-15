import { ACTION_GET_ADDRESS_LIST } from "../../constants/reduce-actions.constant";
import { IProvince } from "../../types/address.types";

export interface InitialState {
  provinces: IProvince[];
}

const initialSate: InitialState = {
  provinces: [],
};

// eslint-disable-next-line
export const addressReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ACTION_GET_ADDRESS_LIST:
      return {
        provinces: action.provinces,
      };
    default:
      return state;
  }
};
