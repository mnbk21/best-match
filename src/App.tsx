
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Search from "./pages/Search"
import SearchDetailed from "./pages/SearchDetailed"
import "./App.css"

const App = () => {

  const [user, setUser] = useState({
    name: "",
    password: "",
  })

  const [loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })

  }

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem("user-data" , JSON.stringify(user))
    setLoggedIn(true)
    navigate("/search")
  }

  const handleDelete = () => {
    localStorage.removeItem("user-data")
    setLoggedIn(false)
    navigate("/")
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data")!)
    userData && setLoggedIn(true)
    userData && setUser(userData)
  }, [])

  return (
    <>
      <Header loggedIn={loggedIn} handleDelete={handleDelete} user={user}/>

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<h1>ページがありません</h1>}/>
          <Route path="/register" element={<Register handleChange={handleChange} handleRegister={handleRegister}/>}/>
          {loggedIn &&
            <Route path="/search" element={<Search/>}/>
          }
          {loggedIn && 
            <Route path="/search-detailed" element={<SearchDetailed/>}/>
          }
        </Routes>
      </main>
    </>
  )
}

export default App