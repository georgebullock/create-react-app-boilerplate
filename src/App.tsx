import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Create React App Boilerplate</p>
        <a
          className="App-link"
          href="https://gitlab.com/georgebullock/cra-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          georgebullock/cra-boilerplate
        </a>
        <div>
          <Routes>
            {ROUTES.map((route) => {
              console.log("route.component:", route.component);
              return (
                <Route
                  path={route.path}
                  key={route.key}
                  element={route.component}
                />
              );
            })}
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
