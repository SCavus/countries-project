function setup() {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;subregion;population;borders;topLevelDomain;nativeName;languages;flag")
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            displayCountries(data)
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

function displayPage(list) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    list.forEach(element => {
      const episode = document.createElement("div");
      episode.innerHTML = `
      <h3 class='title'>${element.name} - S${element.season < 10 ? 0 : ""} ${
        element.season
      } E${element.number < 10 ? 0 : ""} ${element.number}</h3>
      <img class='image' src=${element.image.medium} />
      <p class='summary'>${element.summary}</p>
      `;
      container.appendChild(episode);
    });
}

//   const rootElem = document.getElementById("root");
//   rootElem.innerHTML = `Search ${episodeList.length} episodes
                    
//                         <select id="episode-list"> </select>
//                         <input type="search" id="site-search" placeholder="Search item">`; //Create search field

window.onload = setup
