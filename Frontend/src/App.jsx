import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<AuthPage />}
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;