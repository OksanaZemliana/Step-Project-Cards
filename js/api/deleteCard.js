import instance from "./instance.js"

const deleteCard = async (id) => {
    try {
        const {status, data} = await instance.delete(`${id}`);
        if (status === 200) {
            return data;
        } else {
            console.warn(status, data)
        }
    } catch (err) {
        console.error(err);
    }
}

export default deleteCard;