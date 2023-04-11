import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ShortageProvider } from "./context/ShortageContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ShortageProvider>
          <App />
        </ShortageProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
