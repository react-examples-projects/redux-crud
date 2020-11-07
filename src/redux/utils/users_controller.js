export function get_users() {
  return JSON.parse(localStorage.getItem("users"));
}

export function get_last_id() {
  return localStorage.getItem("lastIndex");
}

export function filter_user_id(id) {
  const users = get_users();
  return users.find((user) => user.id === id);
}

export function save_users(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function modify_user(user) {
  const users = get_users();
  const index = users.findIndex((_user) => _user.id === user.id);
  users[index] = user;
  save_users(users);
}

export function delete_user_id(id) {
  console.log("usuario a eliminar id:", id);
  const users = get_users();
  const index = users.findIndex((_user) => _user.id === id);
  users.splice(index, 1);
  console.log("bandeja actualizada:");
  console.log(users);
  save_users(users);
}
