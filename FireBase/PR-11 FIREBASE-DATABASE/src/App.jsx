import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View"
import Add from "./Pages/Add"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add/>}/>
          <Route path="/add" element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App