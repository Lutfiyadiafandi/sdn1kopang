import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Registration from "./pages/Registration";
import ContactUs from "./pages/ContactUs";
import NewsDetail from "./pages/NewsDetail";
import RegistrationDetail from "./pages/RegistrationDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/berita" element={<News />} />
        <Route path="/berita/:slug" element={<NewsDetail />} />
        <Route path="/ppdb" element={<Registration />} />
        <Route path="/ppdb/form" element={<RegistrationDetail />} />
        <Route path="/kontak" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
