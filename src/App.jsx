import {  Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import Form from "./components/Form"

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Form />} path="/collect" />
      </Routes>
    </div>
  )
}

export default App
