'use strict';
import Authorization from "./classes/Authorization.js";
import changeBtnStyle from "./functions/changeBtnStyle.js";


const login = new Authorization(document.querySelector('.container'));

document.addEventListener('DOMContentLoaded', ()=>{
    if (localStorage.getItem('token')) {
        changeBtnStyle(login.btnAuthorization, 'Створити візит', 'btn-visit')
       // 'отрисовка карточек визита'
       //  getCards.then(res => new Visit.render(res))
     } else {login.render()}

});