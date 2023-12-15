const url = "http://localhost:5500/api"
const newUser = {
    name: "Eduardo Frois",
    avatar: "https://lorempixel.com/400/200/",
    city: "Brasilia"
}
const updateUsers = {
    name: "Lola",
    avatar: "https://lorempixel.com/400/200/",
    city: "Tagualandia"
}

function getUser () {
    axios.get(`${url}/4`) // caso queria pegar as informações de apenas um usuario, basta colocar "/id" e o id no caso é o valor
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getUser()

function addNewUser(){
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//addNewUser()

function updateUser(){
    axios.put(`${url}/4`, updateUsers) // precisa colocar o id na frente da url para realizar o update
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//updateUser()

function deleteUser() {
    axios.delete(`${url}/6`) // precisa colocar o id na frente da url para relaizar o delete
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//deleteUser()
