import { createStore, applyMiddleware } from "redux";
import Reducers from "./reducers/reducers";

//middlewares
import middlewareCrud from "./middlewares/middleware_crud.middleware";

const store = createStore(Reducers, undefined, applyMiddleware(middlewareCrud));

export default store;
