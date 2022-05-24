const continents = [
    {name: 'Africa'},
    {name: 'Americas'},
    {name: 'Asia'},
    {name: 'Europe'},
    {name: 'Oceania'}
];


let countries = [];
let allCountries = [];

const fetchCountries = async() => {
    const response = await fetch('https://restcountries.com/v2/all');
    countries = await response.json();
    return countries;
}


const getCountry = async (country) => {
  const url = "https://restcountries.com/v2/name/";
  const query = `${country}`;

  const data = await fetch(url + query);
  const details = await data.json();

  return details;
}