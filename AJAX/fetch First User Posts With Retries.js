/**
 * # Practical Asynchronous Mental Model on 8th May 2025

Your task is to implement an asynchronous function `fetchFirstUserPostsWithRetries()` that performs the following steps:

1. **Fetches the list of users** from the JSONPlaceholder API:
    - Endpoint: `https://jsonplaceholder.typicode.com/users`
    - If the request fails, retry up to **3 times** before throwing an error.
2. **Selects the first user** from the retrieved list.
3. **Fetches the posts** associated with the first user:
    - Endpoint: `https://jsonplaceholder.typicode.com/posts?userId={userId}`
    - If the request fails, retry up to **3 times** before throwing an error.
4. **Returns** an object containing:
    - `user`: The first user's data.
    - `posts`: An array of the user's posts.

### 🔁 Retry Logic

- Implement a generic `fetchWithRetry(url, options, retries)` function that attempts to fetch the given URL.
- If a network error occurs or the response status is not in the 200–299 range, retry the request up to the specified number of times.
- After exhausting all retries, throw an appropriate error.

### 🔍 Example

```tsx
fetchFirstUserPostsWithRetries()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**Expected Output:**

```tsx
{
  user: {
    id: 1,
    name: "Leanne Graham",
    // ...other user properties
  },
  posts: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum...",
    },
    // ...additional posts
  ]
}
```

## 🧠 Learning Objectives

- **Asynchronous Programming**: Deepen understanding of `async/await` and Promises.
- **Error Handling**: Implement robust error handling and retry mechanisms.
- **API Interaction**: Practice fetching and processing data from external APIs.
- **Code Reusability**: Create reusable utility functions for common tasks.
 */
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