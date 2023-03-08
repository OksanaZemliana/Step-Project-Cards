import loginInfoUser from "../constants/loginInfoUser.js";

const login = () => {
    fetch('https://ajax.test-danit.com/api/v2/cards/login', {
        method: 'POST',
        body: JSON.stringify(loginInfoUser),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text())
        .then(token => {
            console.log(token)
            localStorage.setItem('token', token);
        })
}
export default login;
