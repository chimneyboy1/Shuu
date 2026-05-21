import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
