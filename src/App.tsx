import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Router from './Router'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
