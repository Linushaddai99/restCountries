function htmlToElement(html) {
  let temp = document.createElement("template");
  html = html.trim();
  temp.innerHTML = html;
  return temp.content.firstElementChild;
}

 const filterCountries = (item) => {
   allCountries = countries;
   let similarCountries = allCountries.filter(country => country.name.toLowerCase().includes(item.toLowerCase()) || country.region.toLowerCase().includes(item.toLowerCase()))
    renderCountries(similarCountries);
 }


const search = document.querySelector('.search input');
search.addEventListener('input', () => {
  const item = search.value.trim();
  filterCountries(item);
});


const renderCountries = (data) => {
  const countriesContainer = document.querySelector(".grid");
  countriesContainer.innerHTML = "";
  data.forEach((element) => {
    let country = element.name;
    let capital = element.capital;
    let population = element.population;
    let subregion = element.subregion;
    let imgUrl = element.flag;

    let html = htmlToElement(`
        <div class="countries card" data-country ='${country.toLowerCase()}' >
            <img class="card-img-top" src=${imgUrl}>
            <div class="card-body">
                <h6 class='fw-bold mb-3'>${country}</h6>
                <p class='small'>Population: <span class='small'>${population}</span></p>
                <p class='small'>Region: <span class='small'>${subregion}</span></p>
                <p class='small'>Capital: <span class='small'>${capital}</span></p>
            </div>
        </div>
        `);

    html.addEventListener("click", function (e) {
      let targetCountry = this.dataset.country;
      window.location.href = "details.html?country=" + targetCountry;
    });

    countriesContainer.appendChild(html);
  });
};

const renderContinent = () => {
  const continentContainer = document.querySelector("#continent");
  allCountries = countries;
  for (let continent of continents) {
    let html = htmlToElement(
      `<li><a class="dropdown-item small" href="#">${continent.name}</a></li>`
    );
    continentContainer.appendChild(html);
    html.addEventListener("click", function () {
      let continentName = continent.name;
      countries = allCountries.filter(
        (country) =>
          country.region.toLowerCase() === continentName.toLowerCase()
      );
      console.log(continentName, countries, allCountries);

      renderCountries(countries);
    });
  }
};

fetchCountries()
  .then((countries) => {
    renderCountries(countries);
    renderContinent();
  })
  .catch((err) => console.log(err));
