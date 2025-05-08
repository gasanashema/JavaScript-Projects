// Send a POST request to https://jsonplaceholder.typicode.com/posts with a new post object.

const story = {
  title: "My generated post",
  body: "Some body content here",
  userId: 1,
};
async function postRequest(url, data) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const request = await fetch(url, options);
    const response = await request.json();
    // these lines at the top can also be condensed to
    // const response = await (await fetch(url, options)).json();

    return response;
  } catch (error) {
    console.error("Error here: ", error);
    return null;
  }
}
postRequest("https://jsonplaceholder.typicode.com/posts", story)
  .then(console.log)
  .catch(console.error);
