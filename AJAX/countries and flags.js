// Fetch a list of countries from https://restcountries.com/v3.1/all and display each country’s name and flag.
const url = 'https://restcountries.com/v3.1/all';
async function countriesAndFlags(url,options) {
    const request = await fetch(url);
    const response = await request.json();
    const ul = document.createElement('ul');
    for (const country of response) {
       const li = document.createElement('li');
       const span = document.createElement('span');
       span.textContent = `${country.name.common} ${country.flag}`;
       li.append(span);
       ul.appendChild(li);
    }
    document.body.innerHTML = '';
    return ul;
}

countriesAndFlags(url).then(data => document.body.append(data));