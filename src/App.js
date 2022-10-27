import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";
let AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
let DetailQuotes = React.lazy(() => import("./pages/DetailQuotes"));
let NewQuote = React.lazy(() => import("./pages/NewQuote"));
let NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/allQuotes" />
          </Route>
          <Route path="/allQuotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/allQuotes/:quoteId">
            <DetailQuotes />
          </Route>
          <Route path="/newQuote" exact>
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
