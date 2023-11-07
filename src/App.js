import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Blog } from "./pages/blog";
import { Profile } from "./pages/profile";
import { Portfolio } from "./pages/portfolio";
import { Likes } from "./pages/likes";

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
        <Route path="/" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
