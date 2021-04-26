const countryDetails = document.querySelector(".country-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");
if (name === null) {
  location.href = "/";
}
console.log(name);

const url = "https://restcountries.eu/rest/v2/name/" + name;
console.log(url);

async function fetchCountry() {
  try {
    countryDetails.innerHTML = "";
    const response = await fetch(url);
    const json = await response.json();
    countryDetails.innerHTML += `<h1 class="country-details">${json[0].name}</h1>
    <img src="${json[0].flag}" alt="${json[0].name}">
    <div class="country-info">
    <p>Numericcode: ${json[0].numericCode}</p> 
    <p>City: ${json[0].capital}</p> 
    <p>Region: ${json[0].region}</p> 
    <p>Subregion: ${json[0].subregion}</p> 
    <p>Population: ${json[0].population}</p> 
    <p>Language: ${json[0].languages[0].name}</p>  
    </div>
     <a href="index.html"><button>Get Back</button></a>
    `;
  } catch (error) {
    countryDetails.innerHTML = "Unexpected error occurred";
  }
}
fetchCountry();
