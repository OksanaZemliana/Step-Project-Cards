import login from "../api/login.js";
import changeBtnStyle from "../functions/changeBtnStyle.js";

import wrapperGetAllCards from "../functions/getAllCards.js";

export default class Authorization {
  constructor(container) {
    this.container = container;
    this.template = document.querySelector(".login").content;
    this.templateWrapperLogin = this.template.querySelector("div");
    this.wrapperLogin = this.templateWrapperLogin.cloneNode(true);
    this.btnAuthorization = document.querySelector(".btn-autorize");
  }
  render() {
    this.btnAuthorization.addEventListener("click", () => {
      if (this.btnAuthorization.innerText === "Особистий кабінет") {
        this.container.append(this.wrapperLogin);
      } else if (this.btnAuthorization.innerText === "Створити візит") {
        console.log("Буде визов модального вікна на ввод даних");
      }
    });

    const btnCancelAuthorization =
      this.wrapperLogin.querySelector(".login-cancel");
    btnCancelAuthorization.addEventListener("click", () =>
      this.wrapperLogin.remove()
    );

    const formLogin = this.wrapperLogin.querySelector("form");
    const inputs = formLogin.querySelectorAll(".login-input");

    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const btnSubmit = this.wrapperLogin.querySelector("#login-submit");
      btnSubmit.value = "Далі...";

      const body = {};
      inputs.forEach((element) => (body[element.name] = element.value));

      login(body).then((res) => {
        btnSubmit.value = "Далі";
        if (res) {
          this.wrapperLogin.remove();
          changeBtnStyle(this.btnAuthorization, "Створити візит", "btn-visit");

          //! тут запрос на получение карточек
          wrapperGetAllCards();
        }
      });
    });
  }
}

// [
//   {
//       "doctor": "Therapist",
//       "necessity": "Normal",
//       "status": "Open\nDone",
//       "fullName": "Yura Kaminsky",
//       "motive": "Test",
//       "description": "test",
//       "id": 14078
//   },
//   {
//       "doctor": "Therapist",
//       "necessity": "Low",
//       "status": "Open",
//       "fullName": "Yura Kaminsky",
//       "motive": "fsfd",
//       "description": "ssds",
//       "id": 14435
//   },
//   {
//       "doctor": "Therapist",
//       "necessity": "Low",
//       "status": "Open\nDone",
//       "fullName": "Yura Kaminsky",
//       "motive": "ee",
//       "description": "ee",
//       "id": 14434
//   }
// ]
