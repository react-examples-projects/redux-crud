const exist_user = (user) => {
    const database = JSON.parse(localStorage.getItem("users")) || [];
    const { username, lastname } = user;
    for (const { username: userStore, lastname: lastNameStore } of database) {
        if (userStore === username && lastNameStore === lastname) {
            return true;
        }
    }
    return false;
};

export default exist_user;
