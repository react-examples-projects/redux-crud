// utils functions

import store from "../store";
import add_users from "./reducers-functions/add_users";
import list_users_reducer from "./reducers-functions/lists_users";

function UsuariosReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER": {
      add_users(action.payload);
      return [...state, action.payload];
    }

    case "LIST_USERS": {
      list_users_reducer(action.payload);
      return state;
    }
    default:
      return state;
  }
}
export default UsuariosReducer;
