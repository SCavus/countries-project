let allCountries;

function setup() {
  fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;alpha3Code;currencies;region;subregion;population;borders;topLevelDomain;nativeName;languages;flag"
  )
    .then((response) => response.json())
    .then((data) => {
      allCountries = data;
      displayCountries(data);
      searchTerm(data);
    });
}

const filterByRegion = document.querySelector("#filterbyregion");
filterByRegion.addEventListener("change", (e) => {
  console.log(e.target.value);
  let countriesByRegion = allCountries.filter((key) => {
    if (key.region === e.target.value) {
      return key;
    } else {
      displayCountries(allCountries);
    }
  });
  displayCountries(countriesByRegion);
});

const mainPage = document.querySelector("#front-page");
const country = document.createElement("div");

function displayCountries(countryData) {
  mainPage.innerHTML = "";
  countryData.forEach((element) => {
    const country = document.createElement("div");
    country.className = "country";
    country.innerHTML = `<div>
            <div class='flag-container'>
            <img id=${element.alpha3Code} class="flag" src=${element.flag}></div>
            <div><h3 class="country-name">${element.name}</h3></div>
            <div class="info-block">
                <p class="info">Population: ${element.population}</p>
                <p class="info">Region: ${element.region}</p>
                <p class="info">Capital: ${element.capital}</p>
            </div>
        </div>`;
    mainPage.appendChild(country);
    const flag = document.getElementById(element.alpha3Code);
    flag.addEventListener("click", () => {
      displayDetail(flag.id);
    });
  });
}

function displayDetail(countryId) {
  document.querySelector("#display").className += "hide";
  let selectedCountry = allCountries.filter(
    (element) => countryId === element.alpha3Code
  );
  const countryDetailPage = document.querySelector("#country-details-page");
  countryDetailPage.innerHTML = `
        <div><button>Back</button></div>
        <div class="single-country">
          <img class="flag-single" src=${selectedCountry[0].flag}>
          <div class="info-container">
            <h3 class="country-name">${selectedCountry[0].name}</h3>
            <div class="infoblock-single">
              <p class="info-single">Native Name: ${selectedCountry[0].nativeName}</p>
              <p class="info-single">Population: ${selectedCountry[0].population}</p>
              <p class="info-single">Region: ${selectedCountry[0].region}</p>
              <p class="info-single">Sub Region: ${selectedCountry[0].subregion}</p>
              <p class="info-single">Capital: ${selectedCountry[0].capital}</p>
              <p class="info-single">Top Level Domain: ${selectedCountry[0].topLevelDomain}</p>
              <p class="info-single">Currencies: ${selectedCountry[0].currencies}</p>
              <p class="info-single">Languages: ${selectedCountry[0].languages}</p>
            </div>
            <div>
                <h4>Border Countries</h4>
            </div>
          </div>
        </div>`;
  let button = document.querySelector('button')
  button.addEventListener('click', ()=> {
    countryDetailPage.className+= "hide"
    document.querySelector("#display").className += "show";

  })
}
// function displayDetail() {
//   mainPage.innerHTML = ""
//   console.log(countryId);
//   let selectedCountry = allCountries.filter((element) => {
//     if (countryId === element.name) {
//       return element
//     }})
//     console.log(selectedCountry)
//     const display = document.querySelector("#display");
//     country.className = "single-country";
//     country.innerHTML = `
//         <div><button>Back</button></div>
//         <div>
//             <img class="flag-single" src=${selectedCountry[0].flag}>
//             <div>
//                 <div>
//                     <h3 class="country-name">${selectedCountry[0].name}</h3>
//                     <p class="info-single">Native Name: ${selectedCountry[0].nativeName}</p>
//                     <p class="info-single">Population: ${selectedCountry[0].population}</p>
//                     <p class="info-single">Region: ${selectedCountry[0].region}</p>
//                     <p class="info-single">Sub Region: ${selectedCountry[0].subregion}</p>
//                     <p class="info-single">Capital: ${selectedCountry[0].capital}</p>
//                     <p class="info-single">Top Level Domain: ${selectedCountry[0].topLevelDomain}</p>
//                     <p class="info-single">Currencies: ${selectedCountry[0].currencies}</p>
//                     <p class="info-single">Languages: ${selectedCountry[0].languages}</p>
//                 </div>
//                 <div>
//                     <h4>Border Countries</h4>
//                 </div>
//             </div>
//         </div>`;
//     display.appendChild(country);
//   }

function searchTerm(countryList) {
  const search = document.querySelector("#search");
  search.addEventListener("keyup", function (e) {
    e.preventDefault();
    let term = search.value.toLowerCase();
    let searchRes = countryList.filter((element) =>
      element.name.toLowerCase().includes(term)
    );
    displayCountries(searchRes);
  });
}

window.onload = setup;
