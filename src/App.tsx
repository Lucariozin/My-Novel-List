import { Routes as RouterDomRoutes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Novels from "./pages/Novels";
import Library from "./pages/Library";

export default function App() {
  return (
    <>
      <RouterDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/library" element={<Library />} />
        <Route path="*" element={<Home />} />
      </RouterDomRoutes>
    </>
  )
}
