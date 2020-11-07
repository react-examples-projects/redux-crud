import store from "../../store";

//utils functions
import exist_user from "../exists_user.utils";
import getById from "../getId.utils";
import alerts from "../alerts.utils";

const checkUserExist = (user) => {
    const { UsuariosReducer } = store.getState();
    
    if (!exist_user(user, UsuariosReducer)) {
        getById("usuario-existe").style.display = "none";
        return false;
    } else {
        alerts.show("usuario-existe");
        return true
    }
};

export default checkUserExist;
