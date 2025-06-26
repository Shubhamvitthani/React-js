import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View"
import Add from "./Pages/Add"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App