//Use fetch() to get a random joke from https://icanhazdadjoke.com/ and log it to the console.
const options = {
    headers: {
        'Accept': 'application/json'
    }
}
async function getJoke(url,options) {
  return await fetch(url,options)
    .then((res) => res.json()).then(console.log)
    .catch((err) => console.error("error: ", err));
}
getJoke("https://icanhazdadjoke.com/",options);
