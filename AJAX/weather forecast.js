/**
 * # **Weather forecast**

You are building a web application that fetches data from multiple APIs to display information about different countries. You need to fetch the country details from one API and the weather information for the capital city from another API.

**Here are the requirements:**

Use the fetch API to get the country details from https://restcountries.com/v3.1/name/{countryName}.

Use the fetch API to get the weather details from https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.

The weather API requires the latitude and longitude of the capital city, which you will get from the country details.

Display the country's name, capital city, and current temperature in the console.

**Example:**

If the user searches for "France", your application should:

Fetch country details from https://restcountries.com/v3.1/name/France.

Extract the capital city and its coordinates (latitude and longitude).

Fetch the current weather for the capital city from the weather API.

**Display the results in the console as follows:**

Country: France
Capital: Paris
Current Temperature: 18°C
 */


async function weather(country) {
    const req1 = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const res1 = await req1.json()
    let latlng = res1[0].latlng;
    const req2 = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&current_weather=true`
    );
    const res2 = await req2.json();
    return res2;
}
weather('rwanda').then(x=>x.current_weather).then(console.log);