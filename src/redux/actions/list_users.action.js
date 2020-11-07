const list_users = (container_users, btn_edit = false, btn_remove = false) => {
    return {
        type: "LIST_USERS",
        payload : {
            container : container_users,
            btn_edit,
            btn_remove
        }
    };
};

export default list_users;
