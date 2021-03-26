import { lazy, Suspense } from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Waiting from "./components/Loading";
import routers from "./routers";

function App() {
  const token = "admin";
  const IsProtected = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          (document.title = rest.title) && <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );

  const NoIsProtected = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return !token ? (
          (document.title = rest.title) && <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
  return (
    <Suspense
      fallback={
        <Waiting custom={{ position: "relative", top: "300px", left: "40%" }} />
      }
    >
      <Router>
        <div className="admin">
          <Switch>
            {routers.map((item, index) => {
              const component = lazy(() => import(`${item.component}`));
              return item.isProtected ? (
                <IsProtected
                  key={`router-admin-${index}`}
                  exact
                  title={item.title}
                  path={item.path}
                  component={component}
                />
              ) : (
                <NoIsProtected
                  key={`router-admin-${index}`}
                  exact
                  title={item.title}
                  path={item.path}
                  component={component}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
