import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// ------------->COMPONENT SECTION<---------------
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
