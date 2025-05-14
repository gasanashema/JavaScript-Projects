//Fetch a random quote from https://quotesondesign.com/wp-json/wp/v2/posts and display the quote and author in the DOM.
const options = {
    headers: {
        'Accept': 'application/json'
    },
    mode: 'cors'
}

async function fetchQuote(url,opt) {
    try {
          const req = await fetch(url,opt);
          const res = await req.json();
          return res;
    } catch (error) {
        console.log(error,'error');
    }
  

}
fetchQuote('https://quotesondesign.com/wp-json/wp/v2/posts',options).then(data => {
    const ul = document.createElement('ul');
    data.forEach(el => {
        const li = document.createElement('li');
        li.innerHTML = `${el.title.rendered} - ${el.excerpt.rendered}`; 
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
});