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
    let getUser = await fetchWithRetry(url);
    const user = getUser[0];
    const getPosts = await fetchWithRetry(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = getPosts;
    const fullData = {user,posts};
    return fullData;
}

fetchFirstUserWithRetries()
  .then(data => console.log(data))
  .catch(error => console.error(error));