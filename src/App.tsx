import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Index } from "./Pages";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export function App() {
  return (
    <div className="inline-flex w-full min-h-screen justify-between flex-col gap-0">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Index />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
