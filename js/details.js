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
    const response = await fetch(url);
    const json = await response.json();
    createHtml(json);
  } catch (error) {
    countryDetails.innerHTML = "Unxepected error occured";
  }
}
fetchCountry();
function createHtml(details) {
  countryDetails.innerHTML += `<h1>${details.name}</h1>
    <img class="imagestyle" src="${details.flag}" alt="${details.name}">
    <p>city: ${details.capital}</p> 
                 
    `;
}
