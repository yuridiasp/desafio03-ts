import { Login } from './pages/Login'
import { createLocalStorage, getLocalStorage } from './services/storage'

function App() {

  !getLocalStorage() && createLocalStorage()

  return (
    <Login />
  )
}

export default App
