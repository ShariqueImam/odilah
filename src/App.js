import React, { useState, useEffect } from "react";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Privacy from "./components/Privacy/Privacy";
import "./App.css";
import {  Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
const style = {
  wrapper: "overflow-x-hidden w-[100vw] font",
};
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
