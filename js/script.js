// DATI
const listElem = document.getElementById("email-list");
const refreshBtn = document.getElementById("refresh-btn");

// FUNCTIONS
// Print Email Function
const printEmails = (eamilNum) => {
    for (let i = 1; i <= eamilNum; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
            console.log(resp);
            listElem.innerHTML += `
            <th scope="row">${i}</th>
            <td>${resp.data.response}</td>
            `
        })
    }
};

// Refresh Function
const refresh = () => {
    listElem.innerHTML = "";
    printEmails(10);
};

// ESECUZIONE LOGICA
printEmails(10);
refreshBtn.addEventListener("click", refresh);