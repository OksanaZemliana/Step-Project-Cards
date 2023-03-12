import instance from "./instance.js";

const login = async (loginInfoUser ) => {
    try {
        const {status, data: token}= await instance.post('/login', loginInfoUser);
        if (status === 200) {
            localStorage.setItem('token', token);
                  } return token;
    } catch (err) {
     alert('Введіть вірний логін і пароль');
    }
}

export default login;