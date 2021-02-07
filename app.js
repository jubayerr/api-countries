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
        countryDiv.className = 'country'

        // const countryName = document.createElement('h3')
        // countryName.innerText = element.name;
        // countryDiv.appendChild(countryName);

        // const countryCapital = document.createElement('p')
        // countryCapital.innerText = element.capital;
        // countryDiv.appendChild(countryCapital);

        const countryInfo = `
        <img class="img-flag" src='${element.flag}'>
        <h3 class="country-name">${element.name}</h3>
        <p>capital : ${element.capital}</p>
        <p>languages : ${element.languages[0].name}</p>
        <p>population : ${element.population}</p>
        <p>region : ${element.region}</p>
        
        `
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv)
    }
}



