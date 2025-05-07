//Use fetch() to retrieve user data from https://jsonplaceholder.typicode.com/users and display their names in an unordered list.
async function displayInUl() {
    const request =await fetch('https://jsonplaceholder.typicode.com/users');
   const ul = document.createElement('ul'); 
    let arrayOfVals = await request.json();

    for (const el of arrayOfVals) {
        const li = document.createElement('li');
        li.innerHTML = `Id: ${el.id}, name: ${el.name}, username: ${el.username}`;
        ul.appendChild(li);
    }
    return Promise.resolve(ul);
}

console.log((displayInUl()))
