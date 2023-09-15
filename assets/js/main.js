let tittle = document.querySelector('.tittle')
let description = document.querySelector('.description')
let name = document.querySelector('.name')
let date = document.querySelector('.date')
let button = document.querySelector('.button')
let PlaceForNews = document.querySelector('.show-case')
let Id = document.querySelector('.id')

let users = []

function AddUser (){
    let IdCount = 0
    let object = {
        tittle: tittle.value,
        description: description.value,
        name : name.value,
        date : date.value,
        id: Id.value,
    }
    users.push(object)
    tittle.value = ''
    description.value = ''
    name.value = ''
    date.value = ''
    Id.value = ''
    ShowUsers()
}

function ShowUsers(){
    PlaceForNews.innerHTML= ''
    users.forEach(element =>{
        PlaceForNews.innerHTML+=`
        <div class="news-case">
            <div class="flex-first"><h3>${element.tittle}</h3><p>${element.date}</p></div>
            <p>${element.description}</p>
            <div class="flex-second"><h3>${element.name}</h3><p>id: ${element.id}<p></div>
        </div>`
    })
}

button.addEventListener('click', AddUser)
console.log(users)