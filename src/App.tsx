import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Theming from "./styles/Theming";

function App() {
  return (
    <Theming>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <header style={{ textAlign: "center" }}>
          <h1>Create React App Boilerplate</h1>
          <h2>
            <a
              href="https://gitlab.com/georgebullock/cra-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              georgebullock/cra-boilerplate
            </a>
          </h2>
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
    </Theming>
  );
}

export default App;
