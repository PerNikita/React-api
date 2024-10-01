import { useState } from 'react'

function App() {

  const [users, setUsers] = useState([]);

  console.log('component rendered');

  fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())

    .then(data => {
      console.log(data);
      setUsers(data);
    });

//    .catch(error => console.log(error));

  return (
    <div>
      { JSON.stringify(users[0])}
    </div>
  )
}

export default App
