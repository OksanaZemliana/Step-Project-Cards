import instance from "./instance.js"

const getCard = async (id ='') => {
    try {
        const { status, data } = await instance.get(`${id}`);
        if (status === 200) {
            return data;
        } else {
            console.warn(status, data)
        }
    } catch (err) {
        console.error(err);
    }
}

export default getCard;