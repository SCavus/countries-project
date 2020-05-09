function setup() {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;subregion;population;borders;topLevelDomain;nativeName;languages;flag")
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            displayCountries(data)
        })
   // searchByRegion()
   let regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']     
   let filter = document.querySelector('#filter-region')
   regions.map = ((region) => {
       let option = `<option class="option">${region}</option>`
       filter.innerHTML += option
   })
}

function displayCountries(countryData) {
    const mainPage = document.querySelector('#front-page')
    mainPage.innerHTML = ""
    countryData.forEach(element => {
        const country = document.createElement("div")
        country.className = "country"
        country.innerHTML = `
        <img class="flag" src=${element.flag}>
        <h3 class="country-name">${element.name}</h3>
        <p class="info">Population: ${element.population}</p>
        <p class="info">Region: ${element.region}</p>
        <p class="info">Capital: ${element.capital}</p>`
        mainPage.appendChild(country)
    })
}
function displaySelectedCountry(countryData) {
    const display = document.querySelector('#display')
    display.innerHTML = ""
    country.className = "single-country"
    country.innerHTML = `
    <div><button>Back</button></div>
    <div>
        <img class="flag-single" src=${element.flag}>
        <div>
            <div>
                <h3 class="country-name">${element.name}</h3>
                <p class="info-single">Native Name: ${element.population}</p>
                <p class="info-single">Population: ${element.population}</p>
                <p class="info-single">Region: ${element.region}</p>
                <p class="info-single">Sub Region: ${element.region}</p>
                <p class="info-single">Capital: ${element.capital}</p>
                <p class="info-single">Top Level Domain: ${element.region}</p>
                <p class="info-single">Currencies: ${element.region}</p>
                <p class="info-single">Languages: ${element.region}</p>
            </div>
            <div>

            </div>
        </div>
    </div>`
        mainPage.appendChild(country)
    
} 
function searchByRegion() {
    let regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']     
    let filter = document.querySelector('#filter-region')
    regions.forEach = ((region) => {
        let option = `<option>${region}</option>`
        filter.innerHTML += option
    })
}


window.onload = setup
