import { useState } from 'react'
import './App.css'

function Profile({user}){

  return(
    <div>
      <img src={user.imageUrl} alt={user.name} width={user.imageSize} height={user.imageSize} />
      <h1>{user.name}</h1>
    </div>
  )
}

function App() {
  const saludar = () => {
    alert('Hola mundo')
  }
  const mostratTexto = (e) =>{
    console.log(e.target.value)
  }

  const keyUp = () => {
    console.log('Solto una tecla')
  }

  const [count, setCount] = useState(100);

  const users = [
  {
    name: 'Elvis presly',
    imageUrl: 'https://cdn.britannica.com/85/202285-050-EF215325/Elvis-Presley-Girl-Happy-Boris-Sagal.jpg',
    imageSize: 200,
  },
  {
    name: 'Margot Roblles',
    imageUrl: 'https://static.wikia.nocookie.net/doblaje/images/0/03/MargotRobbi3.jpg/revision/latest?cb=20230703050211&path-prefix=es',
    imageSize: 200,
  },
  {
    name: 'Harley quinn',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/harley-quinn-aves-de-presa-1570441172.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=980:*',
    imageSize: 200,
  }
]
  
  return (
    <>
      {
      users.map(it => {
        <Profile user={it}/>
      })
    }
    <Profile user={users[1]}/>
      <br/>
      <button onClick={() => saludar()}>Hola</button>
      <br/>
      <input type="text" onKeyUp={keyUp} onChange={mostratTexto} />
      <br/>
      <button onClick={() => setCount((count) => count+1)}>Sumar</button>
      <button onClick={() => setCount((count) => count-1)}>Restar</button>
      <p>El contador va en {count}</p>
    </>
  )
}

export default App
