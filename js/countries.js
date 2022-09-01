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
        <button onclick="countryD2etails('${country.cca2}')">details</button>
          `;
        div.appendChild(newElement);
    })
}
// onclick = "userDetails('${country.cca3}')"
const countryD2etails = (code) => {
    // console.log('Get the country Code ', code);
    const url = ` https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => anotherDetails(data[0]))
}

const anotherDetails = code2 => {
    console.log(code2);
    const newDiv = document.getElementById('details-container');
    const anotherDiv2 = document.createElement('div');
    anotherDiv2.classList.add('countryStyle2');

    anotherDiv2.innerHTML = `
    <h3> population: ${code2.population}</h3>
    <img src="${code2.flags.png}" alt="">
    `;
    newDiv.appendChild(anotherDiv2);
}
allCountries();