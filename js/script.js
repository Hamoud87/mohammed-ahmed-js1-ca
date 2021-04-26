const url = "https://restcountries.eu/rest/v2/all";
const flagsContainer = document.querySelector(".flags-container");
async function fetchCountries() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    flagsContainer.innerHTML = "";
    for (let i = 0; i < json.length; i++) {
      const countryName = json[i].name;
      const city = json[i].capital;
      const flags = json[i].flag;
      flagsContainer.innerHTML += ` <a href="details.html?name=${countryName}">
                                             <img class="imagestyle" src="${flags}" alt="${countryName}">
                                             
                                            
                                            </a> `;
    }
  } catch (error) {
    console.log(error);
    flagsContainer.innerHTML = "Uxpected error occured";
  }
}
fetchCountries();
/* json.forEach(function (countries) {
    flagsContainer.innerHTML += `
      <a href="details.html?numericCode=${countries.numericCode}">
        <div style="background-image: url('${countries.flag});"></div>
      </a>`;
  }); */
/*   <h4>Country: ${countryName}</h4>
  <p>city: ${city}</p> */
