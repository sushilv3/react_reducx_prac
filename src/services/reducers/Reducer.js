import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";

const initialState = {
  cardData: [],
};
//it takes state and and action
export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("data get inside Reducer.js",action);
      return [...state, { cardData: action.data }];

    case REMOVE_FROM_CART:
      // console.log("data get inside Reducer.js",action);
      state.pop();
      return [...state];
      break;
    default:
      return state;
  }
}
