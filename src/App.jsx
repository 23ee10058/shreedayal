import { useState, useId } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body.jsx";
import img from "./shreedayal.jpg";
import arrow from './arrow.png'
import Book from "./components/Book.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="" Component={Body}></Route>
        <Route path="/register" Component={Book}></Route>
      </Routes>
    </>
  );
}

export default App;
