let url = 'https://theclickcreations.com/';
async function fetchData(url){
    const response = await fetch(url);
    const data = await response.text();
    return data;
}
fetchData = fetchData(url).then(res=>res);

document.body.innerHTML = fetchData;