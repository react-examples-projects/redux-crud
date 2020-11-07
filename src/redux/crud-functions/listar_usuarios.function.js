import store from "../store";

//actions
import list_users from "../actions/list_users.action";

const listUsers = () => {
  store.dispatch(list_users("usuarios_registrados")); // para ejemplos se podria omitir esta accion
};

export default listUsers;
