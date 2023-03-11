import login from "../api/login.js";

export default class Authorization {
    constructor(container) {
        this.container = container;
        this.template = document.querySelector('.login').content;
        this.templateWrapperLogin = this.template.querySelector('div');
        this.wrapperLogin = this.templateWrapperLogin.cloneNode(true);
        this.btnAuthorization = document.querySelector('.btn-autorize');
    }
       render() {

        this.btnAuthorization.addEventListener('click', () => {
            if (this.btnAuthorization.innerText === 'Особистий кабінет') {
                this.container.append(this.wrapperLogin)
            } else if (this.btnAuthorization.innerText === 'Створити візит') {
                console.log('Буде визов модального вікна на ввод даних')
            }
        });

        const btnCancelAuthorization = this.wrapperLogin.querySelector('.login-cancel');
        btnCancelAuthorization.addEventListener('click', () => this.wrapperLogin.remove())

        const formLogin = this.wrapperLogin.querySelector('form');
        const inputs = formLogin.querySelectorAll('.login-input');

        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const btnSubmit = this.wrapperLogin.querySelector('#login-submit');
            btnSubmit.value = 'Далі...'

            const body = {};
            inputs.forEach((element) => body[element.name] = element.value);

            login(body).then(res => {
                btnSubmit.value = 'Далі'
                if (res) {
                    this.wrapperLogin.remove();
                    this.btnAuthorization.textContent = 'Створити візит';
                    this.btnAuthorization.classList.add('btn-visit');
                }
            })

               })
    }
}