// Dati
const listElem = document.getElementById("email-list");
const refreshBtn = document.getElementById("refresh-btn");

// Refresh Function
const refresh = () => {
    listElem.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
            console.log(resp);
            listElem.innerHTML += `
            <th scope="row">${i}</th>
            <td>${resp.data.response}</td>
            `
        })
    }
};

// Esecuzione Logica
for (let i = 1; i <= 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        console.log(resp);
        listElem.innerHTML += `
        <th scope="row">${i}</th>
        <td>${resp.data.response}</td>
        `
    })
}

refreshBtn.addEventListener("click", refresh);