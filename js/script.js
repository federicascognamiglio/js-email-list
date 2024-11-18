// Dati
const listElem = document.getElementById("email-list");

// Esecuzione Logica
for (let i = 0; i <= 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        console.log(resp);
        listElem.innerHTML += `<li>${resp.data.response}</li>`
    })
}