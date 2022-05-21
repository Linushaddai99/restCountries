

const getCountry = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    console.log(data);
    obj = data;
    return data;
}


const searchCountry = async (country) => {
    const url = 'https://restcountries.com/v2/name/';
    const query = `${country}`;

    const data = await fetch(url + query);
    const data2 = await data.json();

    return data2;
}