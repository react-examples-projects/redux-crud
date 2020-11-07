import cache from "../../utils/cache";
import datetime from "../../utils/date.utils";

const list_users_reducer = (payload) => {
  const elementMemoized = cache(payload.container);
  const all_users = JSON.parse(localStorage.getItem("users") || "[]");
  let template = "";

  if (all_users.length > 0) {
    all_users.forEach(({ username, lastname, date, gender, id }) => {
      template += `
          <div class='user'>
            <img src='img/${gender}.svg' class='gender-img' title='This person is ${gender}' alt='Gender Image'/>
            ${username} ${lastname}
            <time class='datetime'>
              ${datetime.fromInputHTML(date)}
            </time>
            ${
              payload.btn_edit
                ? `<button class="btn btn-primary btn-sm mr-3 btn-edit-user" 
                data-toggle="modal"
                data-target="#editar-usuario-modal"
                data-id="${id}"
                >
                  <i class='fa fa-edit mr-2'> </i>
                  Editar
              </button>`
                : ""
            }
            ${
              payload.btn_remove
                ? `<button class="btn btn-danger btn-sm mr-3 btn-remove-user" 
                data-toggle="modal"
                data-target="#eliminar-usuario-modal"
                data-id="${id}"
                >
                  <i class='fa fa-trash mr-2'> </i>
                  Eliminar
              </button>`
                : ""
            }
          </div>`;
    });
  } else {
    template += "<h6>No hay usuarios registrados.</h6>";
  }
  elementMemoized.innerHTML = template;
};

export default list_users_reducer;
