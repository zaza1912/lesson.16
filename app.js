let carsResponseList = document.getElementById("cars-response-list");
let fileterCarsResponseList = document.getElementById("filtered-cars-response-list");
let cars = [];
let filteredCars = [];


fetch("https://rentcar.webwide.ge/api/Car/popular", {
   
        method: "GET",
    })
    
    .then((response) => {
      
        if (response.ok) {
          
            return response.json();
        } else {
            alert("შეცდომა, რაღაც არ არის რიგზე!!!");
            }
    })
    .then((data) => {
               data.forEach((car) => {
            cars.push(car);
        });

        cars.forEach((car) => {
            carsResponseList.innerHTML += `
              <div class="card" style="width: 18rem;">
              <img src="${car.imageUrl1}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${car.brand}</h5>
                <p class="card-text">${car.model}</p>
                <p class="card-text">${car.price}ლ დღეში</p>
                <a href="#" class="btn btn-primary">${car.year}</a>
                <a href="#" class="btn btn-primary">${car.transmission}</a>
              </div>
            </div>
              `;
        });
    });
console.log("------------------------")

let searchInput = document.getElementById("search-input"); 
let capacityInput = document.getElementById("capacity-input");
let errorBlock = document.getElementById("error-block");
function Search() {
    let searchQuery = searchInput.value;
    let searchQueryCapacity = capacityInput.value;

    fetch(`https://rentcar.webwide.ge/api/Car/filter?capacity=${searchQueryCapacity}&city=${searchQuery}&pageIndex=1&pageSize=10`, {
        method: "GET",
    })
    .then((response) => {

        if (response.ok) {
      
            return response.json();
        } else {
            errorBlock.innerHTML = `<h1> რაღაც არ არის რიგზე, მანქანა ვერ ვიპოვეთ</h1>`
        }
    })
    .then((car) => {
        console.log(car);
        fileterCarsResponseList.innerHTML = "";
        filteredCars = [];
        car.data.forEach((dataCar) =>{
            filteredCars.push(dataCar);
            console.log(dataCar);
        })
        filteredCars.forEach((car) => {
            fileterCarsResponseList.innerHTML += `
              <div class="card" style="width: 18rem;">
              <img src="${car.imageUrl1}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${car.brand}</h5>
                <p class="card-text">${car.model}</p>
                <p class="card-text">${car.price}ლ დღეში</p>
                <a href="#" class="btn btn-primary">${car.year}</a>
                <a href="#" class="btn btn-primary">${car.transmission}</a>
              </div>
            </div>
              `;
        });
    });
}