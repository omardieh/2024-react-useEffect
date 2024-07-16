import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { appRoutes } from "./constants/appRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {appRoutes.map((route, i) => (
          <Route
            key={i + route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
