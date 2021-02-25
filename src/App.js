import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthButton from "./components/AuthButton";
import LoginPage from "./components/LoginPage";
import ProtectedPage from "./components/ProtectedPage";
import PublicPage from "./components/PublicPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { ProvideAuth } from "./provider/AuthProvider";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <AuthButton />

          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <ProtectedRoute path="/protected">
              <ProtectedPage />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
