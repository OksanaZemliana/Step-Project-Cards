import instance from "./instance.js";

const postCard = async (dataForPost) => {
    try {
        const { status, data } = await instance.post('', dataForPost);
        if (status === 200) {
           return data;
        }
    } catch (err) {
        console.error(err);
    }
}

export default postCard;