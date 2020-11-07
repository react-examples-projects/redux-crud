import store from "../store";

// utils functions
import datetime from "../utils/date.utils";

//actions
import add_user from "../actions/add_user.action";

const createUser = (event) => {
    event.preventDefault();
    const { username, lastname, gender, date_user } = event.target;

    store.dispatch(
        add_user({
            username: username.value.trim(),
            lastname: lastname.value.trim(),
            gender: gender.value,
            date: date_user.value,
            id: Math.ceil(Math.random() * 100000),
        })
    );
};

export default createUser;
