export default class Authorization {
    constructor(container) {
        this.container = container;
        this.form = document.createElement('form');
        this.label = document.createElement('label');
        this.inputLogin = document.createElement('input');
        this.inputPassword = document.createElement('input');
    }
}