
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Search from "./pages/Search"

const App = () => {

  const [user, setUser] = useState({
    name: "",
    password: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setUser({
      ...user, // スプレッド構文
      [event.target.name]: event.target.value
    })

  }

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem("user-data" , JSON.stringify(user))
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register handleChange={handleChange} handleRegister={handleRegister}/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </>
  )
}

export default App