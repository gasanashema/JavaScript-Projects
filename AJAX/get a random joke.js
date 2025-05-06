//Use fetch() to get a random joke from https://icanhazdadjoke.com/ and log it to the console.
const options = {
    headers: {
        'Accept': 'application/json'
    }
}
async function getJoke(url,options) {
  return await fetch(url,options)
    .then((res) => res.json())
    .catch((err) => console.error("error: ", err));
}
joke = getJoke("https://icanhazdadjoke.com/",options).then(res=>res).catch('invalid request');
document.body.innerHTML = joke;