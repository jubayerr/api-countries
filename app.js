fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const countriesName = element.name
            const allCountries = document.getElementById('all-countries');
            const li = document.createElement('li')
            li.innerText = countriesName;
            allCountries.append(li);
        }
    })