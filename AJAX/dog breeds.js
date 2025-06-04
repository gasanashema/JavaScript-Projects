//Use fetch() to load a list of dog breeds from https://dog.ceo/api/breeds/list/all.
let link = 'https://dog.ceo/api/breeds/list/all'
async function dogBreeds(url) {
   const req = await fetch(url)
   return req;
}
dogBreeds(link).then(res=>console.log(res.json()))