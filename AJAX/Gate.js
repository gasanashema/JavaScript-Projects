function getFastPosts(){
    const urls = [
      fetch("https://dummyson.com/posts").then((res) => res.json()),
      fetch("https://this-may-not-exist.com/osts").then((res) => res.json()),
      fetch("https://jsonplaceholder.typicode.com/psts").then(res=>res.json()),
    ];
    return Promise.any(urls);
}

getFastPosts().then(console.log).catch(error=>console.log(error));