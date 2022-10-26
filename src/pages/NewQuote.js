import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { addQuote } from "../lib/api";
let NewQuote = () => {
  let history = useHistory();
  let { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/allQuotes");
    }
  }, [status, history]);
  let addQuotes = (data) => {
    sendRequest(data);
  };
  return <QuoteForm isLoading={status === "pending"} onAddQuote={addQuotes} />;
};
export default NewQuote;
