import{ BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import UserManagement from "./Pages/UserManagement"

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/users" element={<UserManagement/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App