const value = document.getElementById('cal-value')
const interest = document.getElementById('cal-int')
const loan = document.getElementById('cal-loan')

let img = document.getElementById('form-img')
let address = document.getElementById('form-address')
let bedroom = document.getElementById('form-room')
let bathroom = document.getElementById('form-bath')
let square_ft = document.getElementById('form-sqft')
let price = document.getElementById('form-price')
let availability = document.getElementById('form-available')
let submitForm = document.getElementById('submit-form')

let homeBody = document.getElementById('home-body')
let homeContainer = document.getElementById("home-container")

const cookieArr = document.cookie.split("=")
const userId = cookieArr[1];

const headers = {
    'Content-Type': 'application/json'
}

const baseUrl = 'http://localhost:8080/homes/'


const handleSubmit = async (e) => {
    e.preventDefault()

    let bodyObj = {
        img: img.value,
        address: address.value,
        bedrooms: bedroom.value,
        bathrooms: bathroom.value,
        square_ft: square_ft.value,
        price: price.value,
        availability: availability.value
    }
    await addHouse(bodyObj);
    // document.getElementById("home-input").value = ''
}
    async function addHouse(obj) {
        const response = await fetch(`${baseUrl}user/${userId}`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: headers
        })
            .catch(err => console.error(err.message))
        if (response.status == 200) {
            return getHome(userId);
        }
    }


    async function getHome(userId){
        await fetch(`${baseUrl}user/${userId}`, {
            method: "GET",
            headers: headers
        })
            .then(response => response.json())
            .then(data => createHomeCards(data))
            .catch(err => console.error(err))
    }

    async function handleDelete(homeId){
        await fetch(baseUrl + homeId, {
            method: "DELETE",
            headers: headers
        })
            .catch(err => console.error(err))

        return getHome(userId);
    }

    async function getHomeById(homeId){
        await fetch (baseUrl + homeId, {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then(data => populateModal(data))
            .catch(err => console.error(err.message))
    }

    async function handleHomeEdit(homeId){
        let bodyObj = {
            id: homeId,
            body: homeBody.value,
            img: img.value,
            address: address.value,
            bedrooms: bedroom.value,
            bathrooms: bathroom.value,
            square_ft: square_ft.value,
            price: price.value,
            availability: availability.value
        }

        await fetch(baseUrl, {
            method: "PUT",
            body: JSON.stringify(bodyObj),
            headers: headers
        })
            .catch(err => console.error(err))

        return getHome(userId)
    }

    const createHomeCards = (array) => {
        homeContainer.innerHTML = ''
        console.log(array)
        array.forEach(obj => {
            console.log(obj)
            let homeCard = document.createElement("div")
            homeCard.classList.add("m-2")
            homeCard.innerHTML = `
                        <div className="home-card">
                        <div className="img-div">
                        <img src="${obj.img}" class="img-card"></img>
                        </div>
                        <div className="address-price">
                        <div className="address">
                        <p className="add">Address:${obj.address}</p>
                        </div>
                        <div className="price">
                        <p className="value">Price:$ ${obj.price}</p>
                        </div>
                        </div>
    
                        <div className="bath-rooms">
                        <div className="rooms">
                        <p className="bedrooms">${obj.bedrooms}</p>
                        </div>
                        <div className="baths">
                        <p className="bathrooms">${obj.bathrooms}</p>
                        </div>
                        </div>
                        <div className="sq-ava">
                        <div className="ft">
                        <p className="sqft">${obj.square_ft}</p>
                        </div>
                        <div className="ava">
                        <p className="true">${obj.availability}</p>
                        </div>
                        </div>
                        <button class="btn btn-danger" onclick="handleDelete(${obj.id})">Delete</button>
                        <button onclick="handleHomeEdit(${obj.id})" type="button" class="btn btn-primary"
                        data-bs-toggle="modal" data-bs-target="#home-edit-modal">
                        Edit
                        </button>
                        </div>
                        `
            homeContainer.append(homeCard);
    })
}

function handleLogout(){
    let c = document.cookie.split(";");
    for(let i in c){
        document.cookie = /^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}

const populateModal = (obj) => {
    homeBody.innerHTML = ''
    homeBody.innerHTML = obj.body
    updateHomeBtn.setAttribute('data-home-id', obj.id);
}
getHome(userId);

submitForm.addEventListener("submit", handleSubmit)

updateHomeBtn.addEventListener("click", (e)=>{
    let homeId = e.target.getAttribute('data-home-id')
    handleHomeEdit(homeId);
})
