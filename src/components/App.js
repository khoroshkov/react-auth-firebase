import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import PrivareRoute from "./PrivateRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Suspense fallback={null}>
              <Switch>
                <PrivareRoute
                  exact
                  path={routes.root.path}
                  component={routes.root.component}
                />
                <PrivareRoute
                  path={routes.upDate.path}
                  component={routes.upDate.component}
                />
                <Route
                  path={routes.signUp.path}
                  component={routes.signUp.component}
                />
                <Route
                  path={routes.logIn.path}
                  component={routes.logIn.component}
                />
                <Route
                  path={routes.forgotPass.path}
                  component={routes.forgotPass.component}
                />
              </Switch>
            </Suspense>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
