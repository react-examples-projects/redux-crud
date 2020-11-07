import checkUserExist from "../utils/crud-checkers/user_exist.utils";
const middlewareCrud = (store) => (next) => (action) => {
    switch (action.type) {
        case "ADD_USER":
            if (!checkUserExist(action.payload)) {
                next(action); // si no existe le user, lo registramos
            }
            break;
            
        case "LIST_USERS": {
            next(action);
        }
        default:
            break;
    }
};

export default middlewareCrud;
