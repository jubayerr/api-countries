// fetch('https://restcountries.eu/rest/v2/all')
//     .then(response => response.json())
//     .then(data => {
//         for (let i = 0; i < data.length; i++) {
//             const element = data[i];
//             const countriesName = element.name
//             const allCountries = document.getElementById('all-countries');
//             const li = document.createElement('li')
//             li.innerText = countriesName;
//             allCountries.append(li);
//         }
//     })

fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    for (let i = 0; i < countries.length; i++) {
        const element = countries[i];
        const countriesDiv = document.getElementById('all-countries');
        const countryDiv = document.createElement('div')
        const countryName = document.createElement('h3')
        const countryCapital = document.createElement('p')
        countryName.innerText = element.name;
        countryCapital.innerText = element.capital;
        countryDiv.appendChild(countryName);
        countryDiv.appendChild(countryCapital);
        countriesDiv.appendChild(countryDiv)
    }
}



