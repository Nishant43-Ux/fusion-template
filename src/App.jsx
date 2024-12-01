
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import Fighter from "./pages/Fighter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/components/Header";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";


function App() {
return (
  <div className="body_bg">
    <Header />
    <Router>
      <Routes>
        {/* <Routes path="/" element={<Home />} /> */}
        <Route path="/fighter" element={<Fighter />} />
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-one" element={<SingleBlog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  </div>
);
}

export default App
