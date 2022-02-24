import { useEffect } from 'react';
import { getUser, setUser } from './context/userContext'
import './App.css'
import Login from './components/Login';
import Todos from './components/Todos';

function App() {
  const user = getUser()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <div className="App">
      <nav className="App-nav">
        <h4 className="App-title">Todo Management App</h4>
        { user && <p>Welcome { user }</p> }
      </nav>
      <div>
        { user ? <Todos /> : <Login /> }
      </div>
    </div>
  )
}

export default App

// login page
// todos page
