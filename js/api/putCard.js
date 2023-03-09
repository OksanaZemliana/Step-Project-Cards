import instance from "./instance.js"

const putCard = async (id, dataUpdate) => {
    try {
        const { status, data } = await instance.put(`${id}`,  dataUpdate);
        if (status === 200) {
            return data;
        } else {
            console.warn(status, data)
        }
    } catch (err) {
        console.error(err);
    }
}

export default putCard;