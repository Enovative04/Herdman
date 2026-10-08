import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import BoviTrack from "./pages/BoviTrack";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bovitrack" element={<BoviTrack />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
