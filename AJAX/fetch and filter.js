async function fetchUserTodos(){
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  const fetchUrls = [
    fetch(usersUrl).then(res=>res.json()),
    fetch(todosUrl).then(res=>res.json())
  ]
  return Promise.all(fetchUrls).then(([users,todos])=>{
    return users.map(user=>{
        const userTodos = todos.filter(todo=>todo.userId === user.id);
        return {
            ...user,todos:userTodos
        }
    })
  }).catch(error=>console.log('error occured : ', error));
}
fetchUserTodos().then(data => console.log(data))