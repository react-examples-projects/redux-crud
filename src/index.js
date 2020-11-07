import store from "./redux/store";

// utils functions
import getById from "./redux/utils/getId.utils";

// crud functions
import createUser from "./redux/crud-functions/create_user.function";
import listUsers from "./redux/crud-functions/listar_usuarios.function";
import editUsers from "./redux/crud-functions/edit_user.function";
import deleteUser from "./redux/crud-functions/delete_usuario.function";

const formCreateUser = getById("create-user-form");
const btnListarUsuarios = getById("listar-usuarios");
const btnEditarUsuarios = getById("editar-usuarios");
const btnEliminarUsuario = getById("eliminar-usuario");

store.subscribe(() => {
    const state_actual = store.getState();
    console.log("Se hizo una accion, store:", state_actual);
});

// set events
formCreateUser.addEventListener("submit", createUser, false);
btnListarUsuarios.addEventListener("click", listUsers, false);
btnEditarUsuarios.addEventListener("click", editUsers, false);
btnEliminarUsuario.addEventListener("click", deleteUser, false);
