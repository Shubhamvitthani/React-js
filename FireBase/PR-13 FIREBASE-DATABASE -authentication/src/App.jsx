import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View"
import Add from "./Pages/Add"
import Login from "./Pages/Login"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/view" element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App