import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggenIn }) => {
  return (
    // 로그인시
    <Router>
      <Switch>
        {isLoggenIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          // 비로그인시
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
