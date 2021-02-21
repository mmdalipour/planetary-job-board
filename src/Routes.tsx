import { useHistory } from "react-router-dom";

// templates
import DefaultTemplate from "template/DefaultTemplate";

// react-router-dom
import { Route, Switch } from "react-router-dom";

// pages
import HomePage from "pages/Home";
import JobsPage from "pages/Jobs";
import AboutUsPage from "pages/AboutUs";
import JobViewPage from "pages/JobView";

export type RoutesProps = {};

/**
 * @component Routes
 */
function Routes({}: RoutesProps) {
  const history = useHistory();
  history.listen(() => {
    window.scrollTo(0, 0);
  });

  return (
    <DefaultTemplate>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={JobsPage} exact path="/jobs" />
        <Route component={JobViewPage} exact path="/jobs/:id" />
        <Route component={AboutUsPage} exact path="/about-us" />
      </Switch>
    </DefaultTemplate>
  );
}

export default Routes;
