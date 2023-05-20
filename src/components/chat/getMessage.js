import axios from "axios"
const host = "https://api.green-api.com";
const idInstance = "1101821540";
const apiTokenInstance = "3b30a2771999490b8570de933b9d515fb40c203e148d42a7a6";
const chatId = "79055800483@c.us";


export function getMessage() {
    
    axios.get(`${host}}/waInstance${idInstance}}/ReceiveNotification/${apiTokenInstance}`
      ).then(function (response) {
        console.log(response);
        console.log("message getted");
      })
      .catch(function (error) {
        console.log(error);
      });

    

}

