import { Routes as RouterDomRoutes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Novels from "./pages/Novels";
import MyList from "./pages/MyList";

export default function App() {
  return (
    <>
      <RouterDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="*" element={<Home />} />
      </RouterDomRoutes>
    </>
  )
}
