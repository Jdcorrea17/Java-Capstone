const value = document.getElementById('cal-value')
const interest = document.getElementById('cal-int')
const loan = document.getElementById('cal-loan')

let img = document.getElementById('form-img')
let address = document.getElementById('form-address')
let bedroom = document.getElementById('form-room')
let bathroom = document.getElementById('form-bath')
let squareFt = document.getElementById('form-sqft')
let price = document.getElementById('form-price')
let availability = document.getElementById('form-available')

let homeBody = document.getElementById('home-body')
let homeContainer = document.getElementById("home-container")

const headers = {
    'Content-Type': 'application/json'
}

const baseUrl = 'http://localhost:8080/homes'


const handleSubmit = async (e) => {
    e.preventDefault()

    let bodyObj = {
        img: 
        address,
        bedrooms,
        bathrooms,
        square_ft,
        price,
        availability
    }
    async function addHouse(obj){
        const response = axios.post(`${baseUrl}/user/${userId}`, JSON.stringify(bodyObj), {headers})
            .then((data) => {
                console.log(data)
            }).catch(err => console.error(err.message))

        if (response.status === 200){
            if(response.status == 200){
                return getHome(userId)
            }
            // document.cookie = `userId=${responseArr[1]}`
            // window.location.replace(responseArr[0])
        }
    }

    const responseArr = await response.JSON()
}

async function getHome(userId){
    axios.get(baseUrl + homeId, {
        method: "Get",
        headers: headers
    })
        .then(response => response.JSON)
        .then(data => createHomeCards(data))
        .catch(err => console.error(err))
}

async function handleDelete(homeId){
    axios.delete(baseUrl + homeId, {
        method: "DELETE",
        headers:headers
    })
        .catch(err => console.error(err))

    return getHome(userId);
}

async function getHomeById(homeId){
    axios.get(baseUrl + homeId, {
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
        body: homeBody.value
    }

    axios.put(baseUrl, {
        method: "PUT",
        body: JSON.stringify(bodyObj),
        headers: headers
    })
        .catch(err => console.error(err))

    return getHome(userId)
}

const createHomeCards = (array) => {
    homeContainer.innerHTML = ''
    array.forEach(obj => {
        let homeCard = document.createElement("div")
        homeCard.classList.add("H-2")
        homeCard.innerHTML = `
                    <div className="home-card">
                    <div className="img-div">
                    <img class="img-card">${obj.img}</img>
                    </div>
                    <div className="address-price">
                    <div className="address">
                    <p className="add">${obj.address}</p>
                    </div>
                    <div className="price">
                    <p className="value">${obj.price}</p>
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
                    <button onclick="getHomeById(${obj.id})" type="button" class="btn btn-primary"
                    data-bs-toggle="modal" data-bs-target="#home-edit-modal">
                    Edit
                    </button>
                    </div>
                    `
        homeContainer.append(homeCard);
    })
}

const populateModal = (obj) => {
    homeBody.innerHTML = ''
    homeBody.innerHTML = bodyObj
    updateHomeBtn.setAttribute('data-home-id', obj.id);
}
getHome(userId);

submitForm.addEventListener("submit", handleSubmit)

updateHomeBtn.addEventListener("click", (e)=>{
    let homeId = e.target.getAttribute('data-home-id')
    handleHomeEdit(homeId);
})
    