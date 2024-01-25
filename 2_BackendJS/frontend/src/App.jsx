import { useState } from 'react'
import './App.css'

// axios is used for sending get request to some url and then it provide then and catch method with it.
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    // we generally not write url like this, because we don't have idea where our server runs.
    // axios.get('http://localhost:3000/api/jokes')  

    axios.get('/api/jokes')  
    .then((res) => {
      setJokes(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>Hii, I am Vinay Rai</h1>
      <p>Jokes:{jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
