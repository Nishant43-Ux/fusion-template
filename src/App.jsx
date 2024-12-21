
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
import PreRegister from "./pages/PreRegister";
import Footer from "./pages/components/Footer";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";


function App() {
return (
  <div className="body_bg">
    <Header />
    <Router>
      <Routes>
        {/* <Routes path="/" element={<Home />} /> */}
        <Route path="/fusion" element={<Fighter />} />
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-one" element={<SingleBlog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pre-register" element={<PreRegister />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
    <Footer />
  </div>
);
}

export default App
