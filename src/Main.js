import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import Concursantes from "./pages/Concursantes";
import Home from "./pages/Home";
import ConcursoDay from "./pages/ConcursoDay";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concursantes" element={ <Concursantes />} />
        {/* <Route path='/concursoDate' element={ <ConcursoDay /> } /> */}
        <Route path='/concursoDate/:id' element={ <ConcursoDay /> } />
        <Route path="/*" element={<Navigate to="/" />} />      </Routes>
    </BrowserRouter>
  );
}

export default App;
