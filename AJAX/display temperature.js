//Use fetch() to get the weather data from https://wttr.in/?format=j1 and show the current temperature.
const url = 'https://wttr.in/?format=j1';
async function displayTemperature(url) {
    const request = await fetch(url);
    const response = await request.json();
    const temperature = response.current_condition[0].temp_C;

    return temperature;
}

displayTemperature(url).then(data=>document.body.textContent = `The current temperature: ${data}`).then(console.log)