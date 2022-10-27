import { useParams, Route, Switch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";
let DetailQuotes = () => {
  let { sendRequest, status, data, error } = useHttp(getSingleQuote, true);
  let params = useParams();
  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if ((status === "completed" && !data) || data.length === 0) {
    return <NoQuotesFound />;
  } else {
    return (
      <div>
        <HighlightedQuote quote={data} />
        <Switch>
          <Route path={`/allQuotes/${data.id}/comments`}>
            <Comments id={data.id} />
          </Route>
        </Switch>
      </div>
    );
  }
};
export default DetailQuotes;
