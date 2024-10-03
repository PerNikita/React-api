import {
  useState,
  useEffect 
} from 'react'

function App() {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log('component rendered');
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => {
        if (!response.ok) {
          throw new Error('Err')
        }

        return response.json();
      })

      .then(data => {
        console.log(data);
        setUsers([data]);
        setIsLoading(false);
    })

    .catch(error => {
      console.log(error);
      setIsLoading(false);
      setIsError(true)});
  }, [])


  return (
    <div>
      { isError ? 'Ошибка' : ''}
      { isLoading ? 'загрузка' : '' }
      { users ? JSON.stringify(users) : '' }
    </div>
  )
}

export default App
