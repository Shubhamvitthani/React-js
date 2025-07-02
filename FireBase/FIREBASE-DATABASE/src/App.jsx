import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View"
import Add from "./Pages/Add"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App