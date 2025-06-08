/**
 * 
 */

let api = "https://quotesondesign.com/wp-json/wp/v2/psts";
async function fetchQuote(url) {
    const response = await fetch(url);
    let i = 1;
    while (!response.ok) {
        if(i<=5){
            setTimeout(async()=>response = await fetch(url),1000);
            i++;
            console.log(i);
        }else{
            throw Error('Invalid API');
        }

    }
    const res = await response.json()
    console.log(res[0]);

    return res;
}

fetchQuote(api)//.then(console.log)