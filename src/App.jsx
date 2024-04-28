import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Login from "./components/pages/Login/Login"
// import Movies from "./components/pages/Movies/Movies"
import Home from "./components/pages/Home/Home"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/movie" element={<Movies/>}/> */}
        </Routes>
      </Router>

    </>
  )
}
export default App