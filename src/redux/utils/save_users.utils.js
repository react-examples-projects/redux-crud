import { get_users, get_last_id } from "./users_controller";

let lastIndex = get_last_id() !== null ? get_last_id() : 0;

function saveUsers(user) {
  let users_olds = get_users() || [];

  lastIndex++;
  user.id = lastIndex;
  users_olds.push(user);
  localStorage.setItem("users", JSON.stringify(users_olds));
  localStorage.setItem("lastIndex", lastIndex);
}

export default saveUsers;
