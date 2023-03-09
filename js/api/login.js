import instance from "./instance.js";

const login = async (loginInfoUser) => {
    try {
        const {status, data: token}= await instance.post('/login', loginInfoUser);
        if (status === 200) {
            localStorage.setItem('token', token);
            console.log(token)
        }
    } catch (err) {
        console.error(err);
    }
}

export default login;