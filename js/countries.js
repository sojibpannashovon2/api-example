console.log("its working babe!!");

const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => dataOfCountries(data))
}

const dataOfCountries = countries => {
    console.log(countries);

    const div = document.getElementById('country-container');
    countries.forEach(country => {
        const newElement = document.createElement('div');
        newElement.classList.add('countryStyle');
        newElement.innerHTML = `
        <p> name: ${country.name.common} <====> official: ${country.name.official} </p>
        <p> region: ${country.region} </p>
        <p> capital: ${country.capital}  </p>
`;
        div.appendChild(newElement);
    })
}
allCountries();