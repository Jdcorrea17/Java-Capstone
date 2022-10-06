const value = document.getElementById('cal-value')
const interest = document.getElementById('cal-int')
const loan = document.getElementById('cal-loan')
const calculatorContainer = document.getElementById('calculator-container')
const calculateForm = document.getElementById('calculate')


let img = document.getElementById('form-img')
let address = document.getElementById('form-address')
let bedroom = document.getElementById('form-room')
let bathroom = document.getElementById('form-bath')
let squareFt = document.getElementById('form-sqft')
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

async function calculate(e) {
    e.preventDefault()

    let obj = {
        interest: interest.value,
        principal: value.value,
        mortgage: loan.value
        // interest: document.getElementById("cal-int").value,
        // mortgage: document.getElementById("cal-loan").value,
        // principal: document.getElementById("cal-value").value,
        // total: document.getElementById("").value
    }
    const response = await fetch(`${baseUrl}calculator/mortgage`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: headers
    })
        .catch(err => console.error(err.message))
    if (response.status == 200) {
        console.log(response)
        createMortgageCard(response)
    }
}

const createMortgageCard = (array) => {
    calculatorContainer.innerHTML = ''
    console.log(array)
    array.forEach(obj => {
        console.log(obj)
        let CalculatorCard = document.createElement("div")
        CalculatorCard.classList.add("m-1")
        CalculatorCard.innerHTML = `
        <div>
        <div>
            <p class="calculate-total">Equation:(${obj.principal} * ${obj.interest}) % (1.0 - (1.0 + ${obj.interest}, - ${obj.mortgage} * 12 = ${obj.total}</p>
        </div>
            
        
        </div>
        
        `
        calculatorContainer.append(CalculatorCard);
    })
}

const handleSubmit = async (e) => {
    e.preventDefault()

    let bodyObj = {
        img: img.value,
        address: address.value,
        bedrooms: bedroom.value,
        bathrooms: bathroom.value,
        squareFt: squareFt.value,
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
            squareFt: squareFt.value,
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
                        <div id="home-card">
                            <div class="card-flex">
                                <div class="img-div">
                                <img src="${obj.img}" class="img-card"></img>
                                </div>
                                <div class="address-price">
                                    <div class="address">
                                    <p class="add">Address: ${obj.address}</p>
                                    </div>
                                    <div class="price">
                                    <p class="value">Price: $${obj.price}</p>
                                    </div>
                                </div>
            
                                <div class="bath-rooms">
                                    <div class="rooms">
                                        <p class="bedrooms">bedrooms: ${obj.bedrooms}</p>
                                    </div>
                                    <div class="baths">
                                        <p class="bathrooms">bathrooms: ${obj.bathrooms}</p>
                                    </div>
                                </div>
                                <div class="sq-ava">
                                    <div class="ft">
                                        <p class="sqft">SquareFt: ${obj.squareFt}</p>
                                    </div>
                                    <div class="ava">
                                        <p class="true">Avaliable: ${obj.availability}</p>
                                    </div>
                                </div>
                                </div>
                            
                            <div class="functions">
                                <div class="delete">
                                    <button class="btn btn-danger" onclick="handleDelete(${obj.id})">Delete</button>
                                </div>
                                <div class="edit">
                                    <button onclick="getHomeById(${obj.id})" type="button" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#home-edit-modal">
                                    Edit
                                </button>
                                </div>
                            </div>
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
    // updateHomeBtn.setAttribute('data-home-id', obj.id);
}
// getHome(userId);

calculateForm.addEventListener("submit", calculate)
submitForm.addEventListener("submit", handleSubmit)

// updateHomeBtn.addEventListener("click", (e)=>{
//     let homeId = e.target.getAttribute('data-home-id')
//     handleHomeEdit(homeId);
// })
