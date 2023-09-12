import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Importing components
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* Using Suspense for handling asynchronous components */}
      <Suspense fallback={null}>
        {/* Setting up the Router for navigation */}
        <Router>
          {/* Including the Header component */}
          <Header />

          {/* Defining routes */}
          <Routes>
            {/* Route for the Home page */}
            <Route exact path="/" element={<Home />} />

            {/* Route for the About page */}
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
