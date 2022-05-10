const grid = document.querySelector('.grid');
const filter = document.querySelector('.dropdown-menu');
const grid2 = document.querySelector('.grid2');


const updateUI = (data) => {
    data.forEach(element => {
        let country = element.name;
        let capital = element.capital;
        let population = element.population;
        let subregion = element.subregion;
        let imgUrl = element.flag;

        

        let html= `
        <div class="countries card">
            <img class="card-img-top" src=${imgUrl}>
            <div class="card-body">
                <h6 class='fw-bold mb-3'>${country}</h6>
                <p class='small'>Population: <span class='small'>${population}</span></p>
                <p class='small'>Region: <span class='small'>${subregion}</span></p>
                <p class='small'>Capital: <span class='small'>${capital}</span></p>
            </div>
        </div>
        `;

        grid.innerHTML += html;
    })
}

const filterContinent = (data, item) => {
    let result = data.filter(country => country.region === item);

    grid.style.display = 'none';

    result.forEach(element => {
        let country = element.name;
        let capital = element.capital;
        let population = element.population;
        let subregion = element.subregion;
        let imgUrl = element.flag;

        

        let html= `
        <div class="countries card">
            <img class="card-img-top" src=${imgUrl}>
            <div class="card-body">
                <h6 class='fw-bold mb-3'>${country}</h6>
                <p class='small'>Population: <span class='small'>${population}</span></p>
                <p class='small'>Region: <span class='small'>${subregion}</span></p>
                <p class='small'>Capital: <span class='small'>${capital}</span></p>
            </div>
        </div>
        `;

        grid2.innerHTML += html;
    })
}




window.addEventListener('load', () => {
    getCountry()
    .then(data => {updateUI(data)})
    .catch(err => {console.log(err)})
})



filter.addEventListener('click', e => {
    let item = e.target.innerHTML;

    getCountry()
    .then(data => {filterContinent(data, item)})
    .catch(err => {console.log(err)});
})