// DATI
const listElem = document.getElementById("email-list");
const refreshBtn = document.getElementById("refresh-btn");
let emailArray = [];

// FUNZIONI
// Funzione che stampa Email
const printEmail = () => {
    emailArray.forEach((curItem, index) => {
        listElem.innerHTML += `
            <th scope="row">${++index}</th>
            <td>${curItem}</td>
            `;
    });
};

// Funzione che crea array di promises
let promises = [];
const iterateEmail = () => {
    for (let i = 0; i < 10; i++) {
        promises.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {emailArray.push(resp.data.response)}))
    }
    Promise.all(promises).then(printEmail)
};

// Refresh Function
const refresh = () => {
    listElem.innerHTML = "";
    emailArray = [];
    iterateEmail();
};

// ESECUZIONE LOGICA
iterateEmail();
refreshBtn.addEventListener("click", refresh);