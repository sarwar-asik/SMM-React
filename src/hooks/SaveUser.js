import main_api from "../shared/main_api";


 export const addUser = (user) => {
    fetch(`${main_api}/users/addUser`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
         return result
        }
      })
  };

 