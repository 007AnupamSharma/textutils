import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
  };
  const toggleMode = (cls) => {
    removeBodyClass();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0a2258";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Ligth mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar text="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<FormText
                heading="Enter the Text to Analysis Below"
                mode={mode}
              />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
