const URL = "https://ajax.test-danit.com/api/v2";
export const removeCard = async (id) => {
  const response = await fetch(`URL/cards/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  }).then((res) => res);
};
