import alerts from "../../utils/alerts.utils";
import saveUsers from "../../utils/save_users.utils";
const add_users = (payload) => {
  saveUsers(payload);
  alerts.show("usuario-creado");
};

export default add_users;
