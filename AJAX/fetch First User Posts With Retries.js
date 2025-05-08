let url = 'https://jsonplaceholder.typicode.com/users';

async function fetchWithRetry(url,options,retries = 3){
    let response = null;
    while(retries > 0){
        try{
            const request = await fetch(url);
            response = await request.json();
            break;
        }catch(err){
            retries--;
            if(retries === 0) throw err;     
        }
    }
    return response;
}

async function fetchFirstUserWithRetries(){
    let user = await fetchWithRetry(url);
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user[0]}`);
    return await posts;
}

fetchFirstUserWithRetries().then(console.log);