import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/likes">Likes</Link>
      </div>
      <Routes>
        <Route path="/" element={<div>testing</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
