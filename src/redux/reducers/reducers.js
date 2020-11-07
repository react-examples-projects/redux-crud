import { combineReducers } from "redux";

// reducers
import UsuariosReducer from "./usuarios.reducer.js";

const Reducers = combineReducers({
    UsuariosReducer,
});

export default Reducers;
