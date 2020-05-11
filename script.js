function setup() {
  fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;subregion;population;borders;topLevelDomain;nativeName;languages;flag"
  )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data)
      displayCountries(data);
      searchTerm(data);
      const filterByRegion = document.querySelector("#filterbyregion");
      filterByRegion.addEventListener("change", (e) => {
          console.log(e.target.value)
          let countriesByRegion = data.filter((key) => {
          if (key.region === e.target.value) {
            return key;
          } else {
            displayCountries(data)
          }
        });
        displayCountries(countriesByRegion);
      });
    });

  const mainPage = document.querySelector("#front-page");
  const country = document.createElement("div");
//   country.innerHTML = `<div>
//         <div><img id="flag" class="flag"></div>
//         <div><h3 class="country-name"></h3></div>
//         <div class="info-block">
//             <p class="info"></p>
//             <p class="info"></p>
//             <p class="info"></p>
//         </div>
//     </div>`;

  function displayCountries(countryData) {
    mainPage.innerHTML = "";
    countryData.forEach((element) => {
      const country = document.createElement("div");
      country.className = "country";
      country.innerHTML = `<div>
            <div><img id="flag" class="flag" src=${element.flag}></div>
            <div><h3 class="country-name">${element.name}</h3></div>
            <div class="info-block">
                <p class="info">Population: ${element.population}</p>
                <p class="info">Region: ${element.region}</p>
                <p class="info">Capital: ${element.capital}</p>
            </div>
        </div>`;
      mainPage.appendChild(country);
    });
  }

  //   let flag = document.querySelector("#flag")
  //   console.log(flag)
  //   flag.addEventListener('click', (e) => {
  //       let countryId = e.target.value
  //       console.log(countryId)
  //       const display = document.querySelector('#display')
  //       display.innerHTML = ""
  //       country.className = "single-country"
  //       country.innerHTML = `
  //       <div><button>Back</button></div>
  //       <div>
  //           <img class="flag-single" src=${element.flag}>
  //           <div>
  //               <div>
  //                   <h3 class="country-name">${element.name}</h3>
  //                   <p class="info-single">Native Name: ${element.population}</p>
  //                   <p class="info-single">Population: ${element.population}</p>
  //                   <p class="info-single">Region: ${element.region}</p>
  //                   <p class="info-single">Sub Region: ${element.region}</p>
  //                   <p class="info-single">Capital: ${element.capital}</p>
  //                   <p class="info-single">Top Level Domain: ${element.region}</p>
  //                   <p class="info-single">Currencies: ${element.region}</p>
  //                   <p class="info-single">Languages: ${element.region}</p>
  //               </div>
  //               <div>
  //                   <h4>Border Countries</h4>
  //               </div>
  //           </div>
  //       </div>`
  //         mainPage.appendChild(country)
  //   }
  // )

  function searchByRegion() {
    let regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    let filter = document.querySelector("#filter-region");
    regions.forEach = (region) => {
      let option = `<option value="${region}">${region}</option>`;
      filter.innerHTML += option;
    };
  }

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

  function displayByRegion(data) {
    const region = document.querySelector("option");
    region.addEventListener("click", (e) => {
      e.preventDefault();
      let regionCountries = data.forEach((element) => {
        region === element.region;
      });
    });
  }
}
window.onload = setup;
