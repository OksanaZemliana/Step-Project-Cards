import instance from "./instance.js"

const deleteCard = async (id, removeItem) => {
    try {
        const { status, data } = await instance.delete(`${id}`);
        if (status === 200) {
            removeItem();
        } else {
            console.warn(status, data)
        }
    } catch (err) {
        console.error(err);
    }
}

export default deleteCard;