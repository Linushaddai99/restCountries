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