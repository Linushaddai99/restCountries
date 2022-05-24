const back = document.querySelector(".back-js");
back.addEventListener("click", () => {
  history.back();
});

let urlParts = window.location.href.split("?country=");
const country = urlParts[1];
console.log(urlParts, country);

getCountry(country)
  .then((data) => findCountry(data))
  .catch((err) => console.log(err));

const findCountry = (result) => {
  const detailsContainer = document.querySelector("#country-details-js");
  data = result[0];
  console.log(data);
  let imgSrc = data.flag;
  let name = data.name;
  let nativeName = data.nativeName;
  let population = data.population;
  let region = data.region;
  let subregion = data.subregion;
  let capital = data.capital;
  let topleveldomain = data.topLevelDomain;
  let currencies = data.currencies[0].name;
  let languages = data.languages[0].name;
  let borderCountries = data.borders;
  let borderArray = [];

  if (borderCountries) {
    for (let i = 0; i < borderCountries.length; i++) {
      let border = `
            <button class="border-countries-css">
                ${borderCountries[i]}
            </button>
            `;
      borderArray.push(border);
    }
  }
  console.log(borderArray, borderCountries);

  let content = `
        <div class="container my-5">
            <div class="country-details-css" data-country ='${country.toLowerCase()}'>
            <div class="details-flag">
                <img src="${imgSrc}" class="img-fluid details-img-css">
            </div>
            <div>
                <div class="text-grid">
                    <div>
                        <h3 class="fw-bold">${name}</h3>
                        <!-- <div class="stats"> -->
                        <p>Native Name: <span class="native-name">${nativeName}</span></p>
                        <p>Population: <span class="population">${population}</span></p>
                        <p>Region: <span class="region">${region}</span></p>
                        <p>Sub Region: <span class="sub-region">${subregion}</span></p>
                        <p>Capital: <span class="capital">${capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: <span class="tld">${topleveldomain}</span></p>
                        <p>Currencies: <span class="currencies">${currencies}</span></p>
                        <p>Languages: <span class="languages">${languages}</span></p>
                    </div>
                </div>
                    <div>
                        <p style='font-size: 12px;'>Border Countries: <span>${borderArray.join(
                          " "
                        )}</span></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
  detailsContainer.innerHTML = content;
};

const iconn = document.querySelector("#iconn");
iconn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mood");
  if (document.body.classList.contains("dark-mood")) {
    iconn.setAttribute("class", "fa-solid fa-moon");
  } else {
    iconn.setAttribute("class", "fa-solid fa-sun");
  }
});
