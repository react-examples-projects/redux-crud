import store from "../store";
import { filter_user_id, modify_user } from "../utils/users_controller";
import cache from "../utils/cache";

//actions
import list_users from "../actions/list_users.action";
const form_edit = cache("edit-user-form");

form_edit.addEventListener("submit", function (e) {
  e.preventDefault();
  modify_user({
    username: this.username_edit.value,
    lastname: this.lastname_edit.value,
    gender: this.gender_edit.value,
    date: this.date_user_edit.value,
    id: +this.id_user.value,
  });
  location.reload();
});

const editUsers = () => {
  // listar con el boton de editar
  store.dispatch(list_users("editar_usuarios", true));

  const btns = document.querySelectorAll(".btn-edit-user");

  const fnSearch = function () {
    const id = +this.getAttribute("data-id");
    const { username, lastname, gender, date } = filter_user_id(id);
    console.log(username, lastname);
    form_edit.username_edit.value = username;
    form_edit.lastname_edit.value = lastname;
    form_edit.gender_edit.value = gender;
    form_edit.date_user_edit.value = date ;
    form_edit.id_user.value = id;
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", fnSearch, false);
  });
};

export default editUsers;
