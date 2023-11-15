import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./pages/blog";
import { Profile } from "./pages/profile";
import { History } from "./pages/history";
import { Likes } from "./pages/likes";
import { Resume } from "./pages/resume";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
