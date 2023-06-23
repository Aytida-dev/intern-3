import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import BodyPart from "./components/BodyPart";
import HeadPart from "./components/HeadPart";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <div style={{ marginTop: "50px" }}>
      <NavbarComp />
      <HeadPart />
      <BodyPart />
    </div>
  );
}

export default App;
