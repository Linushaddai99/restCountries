function htmlToElement(html) {
  let temp = document.createElement("template");
  html = html.trim();
  temp.innerHTML = html;
  return temp.content.firstElementChild;
}

const backButtonElement = document.querySelector(".back-js");
backButtonElement.addEventListener("click", () => {
  countries = allCountries;
  renderCountries(countries);
});

// const findCountry = (result) => {
//     grid.style.display = 'none';

//     data = result[0];
//     console.log(data);
//     let imgSrc = data.flag;
//     let name = data.name;
//     let nativeName = data.nativeName;
//     let population = data.population;
//     let region = data.region;
//     let subregion = data.subregion;
//     let capital= data.capital;
//     let topleveldomain = data.topLevelDomain;
//     let currencies = data.currencies.name;
//     let languages = data.languages;
//     // let borderCountries = da;

//     let content = `
//     <div class="details-grid" data-country ='${country.toLowerCase()}'>
//             <div class="details-flag">
//                 <img src="${imgSrc}" class="img-fluid">
//             </div>

//             <div>
//                 <div class="text-grid">
//                     <div>
//                         <h3 class="fw-bold">${name}</h3>
//                         <!-- <div class="stats"> -->
//                         <p>Native Name: <span class="native-name">${nativeName}</span></p>
//                         <p>Population: <span class="population">${population}</span></p>
//                         <p>Region: <span class="region">${region}</span></p>
//                         <p>Sub Region: <span class="sub-region">${subregion}</span></p>
//                         <p>Capital: <span class="capital">${capital}</span></p>
//                     </div>
//                      <div>
//                         <p>Top Level Domain: <span class="tld">${topleveldomain}</span></p>
//                         <p>Currencies: <span class="currencies">${currencies}</span></p>
//                         <p>Languages: <span class="languages">${languages}</span></p>
//                      </div>
//                     </div>
//                     <div class="border-countries">imgSrc
//                         Border Countries: <span>border</span>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//     details.innerHTML = content;
//  }

// UI update function

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
      const target = e.target;
      let targetCountry = this.dataset.country;
      searchCountry(targetCountry)
        .then((data) => findCountry(data))
        .catch((err) => {
          console.log(err);
        });
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
      console.log(continentName, countries);

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
