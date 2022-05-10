const getCountry = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();

    return data;
}