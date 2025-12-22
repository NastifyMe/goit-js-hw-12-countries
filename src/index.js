function listCountry(countries) {
    return `
    <ul>
        ${countries.map(country => `<li>${country.name}</li>`).join('') }
    </ul>`
}

function countryCard(country) {
    return `
    <h2>${country.name}</h2>
    <p><b>Capital:</b>${country.capital}</p>
    <p><b>Population</b>${country.population}</p>
    <p><b>languages:</b>
    ${country.languages.map(language => language.name)}</p>
    <img src="${country.flag}" alt="">`
}

