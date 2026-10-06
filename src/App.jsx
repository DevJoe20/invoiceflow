import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import PowerfulFeatures from "./Components/PowerfulFeatures"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<PowerfulFeatures />} />
      </Routes>
    </div>
  )
}

export default App