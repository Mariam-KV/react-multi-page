import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

let AllQuotes = () => {
  let { sendRequest, status, data, error } = useHttp(getAllQuotes, true);
  let [deleting, setDelete] = useState("");
  useEffect(() => {
    sendRequest();
  }, [sendRequest, deleting]);
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
  if (status === "completed" && (!data || data.length === 0)) {
    return <NoQuotesFound />;
  } else {
    return <QuoteList quotes={data} onFetch={setDelete} />;
  }
};
export default AllQuotes;
