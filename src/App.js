import AllQuotes from "./pages/AllQuotes";
import DetailQuotes from "./pages/DetailQuotes";
import NewQuote from "./pages/NewQuote";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/allQuotes" />
        </Route>
        <Route path="/allQuotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/allQuotes/:quoteId/comments">
          <DetailQuotes />
        </Route>
        <Route path="/newQuote" exact>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
