'use strict';
import Authorization from "./classes/Authorization.js";


const login = new Authorization(document.querySelector('.container'));

document.addEventListener('DOMContentLoaded', ()=>{
    if (localStorage.getItem('token')) {
        login.btnAuthorization.textContent = 'Створити візит';
        login.btnAuthorization.classList.add('btn-visit')
       // 'отрисовка карточек визита'
       //  getCards.then(res => new Visit.render(res))
     } else {login.render()}

});