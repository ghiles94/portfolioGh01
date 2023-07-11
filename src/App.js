import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projets from "./components/Projets";
import Projet from "./components/Projet";
import TemoignageForm from "./components/TemoignageForm";
import Temoignage from "./components/Temoignage";
import { Outlet } from "react-router-dom";
import TemoignageEdit from "./components/TemoignageEdit";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="projets" element={<Projets />} />
        <Route path="projets/:id" element={<Projet />} />
        <Route path="temoignage/add" element={<TemoignageForm />} />
        <Route path="contact" element={<Contact />} />
        <Route path="temoignages" element={<Temoignage />} />
        <Route path="temoignages/edit/:id" element={<TemoignageEdit />} />
      </Route>
    </Routes>
  );
}
