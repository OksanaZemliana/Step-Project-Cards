// "https://ajax.test-danit.com/api/v2/cards"

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

export default async function getAllCards() {
  const response = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Что-то пошло не так");
  }

  return await response.json();
}
