

import axios from "axios";


import {
  useQuery,
} from '@tanstack/react-query'

import './App.css'

function App() {


const { isLoading, error, data, isFetching } = useQuery({
  queryKey: ['todos'],
  queryFn: () =>
    axios
      .get('http://localhost:3000/todos')
      .then((res) => res.data),
})

if (isLoading) {
  return <div className="loading">Loading...</div>;
}

if (error) {
  return <div className="loading">Something Went Wrong!</div>;
}

  return (
    <>
      <div>
      <div className="todos">
        <h2>React Query Test</h2>
        {data.map((todo) => (
          <div
          
            key={todo.id}
          >
            {todo.title}
          </div>
        ))}
      </div>
      </div>
      
    </>
  )
}

export default App
