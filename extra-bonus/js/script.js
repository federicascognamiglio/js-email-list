// DATI
const listElem = document.getElementById("email-list");
const refreshBtn = document.getElementById("refresh-btn");
const emailArray = [];

// FUNZIONI
// Funzione che genera Email
const getEmail = () => {
    new Promise(function (resolve, reject) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
            emailArray.push(resp.data.response);
            resolve(resp.data.response)
        })
    })
};

// Funxione che itera altra funzione
const iterateEmail = () => {
    new Promise(function(resolve, reject) {
        for (let i = 0; i < 10; i++) {
            getEmail();
        }
        resolve(emailArray);
    })
    console.log(emailArray);
};

// Funzione che stampa Email
const printEmail = () => {
    new Promise(function (resolve, reject) {
        emailArray.forEach((curItem, index) => {
            console.log(curItem);
            listElem.innerHTML += `
            <th scope="row">${++index}</th>
            <td>${curItem}</td>
            `
        });
        resolve(listElem.innerHTML);
    })
};

// ESECUZIONE LOGICA
iterateEmail();
Promise.all([getEmail, iterateEmail]).then(printEmail);










// Funzione che genera 10 Email
// const getEmail = () => {
//     new Promise(function(resolve, reject) {
//         for (let i = 1; i <= 10; i++) {
//             axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
//                 emailArray.push(resp.data.response)
//                 resolve(emailArray);
//                 console.log(emailArray);
//             })
//         }
//     });
// };