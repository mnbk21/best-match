
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Search from "./pages/Search"

const App = () => {

  const [user, setUser] = useState({
    name: "",
    password: "",
  })

  const [loggedIn, setLoggedIn] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setUser({
      ...user, // スプレッド構文
      [event.target.name]: event.target.value
    })

  }

  console.log(loggedIn)

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem("user-data" , JSON.stringify(user))
    setLoggedIn(true)
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data") || "{}")
    userData && setLoggedIn(true)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<h1>ページがありません</h1>}/>
        <Route path="/register" element={<Register handleChange={handleChange} handleRegister={handleRegister}/>}/>
        { loggedIn &&
          <Route path="/search" element={<Search/>}/>
        }
          
      </Routes>
    </>
  )
}

export default App