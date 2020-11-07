import store from "../store";
import cache from "../utils/cache";
import { filter_user_id, delete_user_id } from "../utils/users_controller";
//actions
import list_users from "../actions/list_users.action";

const userName = cache("usuario_eliminar");
const btnDelete = cache("remove-user-btn");

const deleteUser = () => {
  store.dispatch(list_users("eliminar_usuarios", false, true));
  const btns = document.querySelectorAll(".btn-remove-user");

  const fnSearch = function () {
    const id = +this.getAttribute("data-id");
    userName.innerText = filter_user_id(id).username;

    const deleteUserFn = () => {
      delete_user_id(id);
        location.reload();
    };

    btnDelete.addEventListener("click", deleteUserFn);
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", fnSearch, false);
  });
};

export default deleteUser;
