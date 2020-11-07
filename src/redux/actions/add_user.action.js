const add_user = ({ username, lastname, date, gender, id, coins }) => {
    return {
        type: "ADD_USER",
        payload: {
            username,
            lastname,
            date,
            gender,
            id,
            coins,
        },
    };
};

export default add_user;
