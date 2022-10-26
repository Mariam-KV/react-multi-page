import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id < quoteB.id ? 1 : -1;
    } else {
      return quoteA.id > quoteB.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {
  let history = useHistory();
  let location = useLocation();
  let sorting = new URLSearchParams(location.search);
  let sort = sorting.get("sort") === "asc";
  let sortedData = sortQuotes(props.quotes, sort);
  let handleSorting = () => {
    history.push(`/allQuotes?sort=` + (sort ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleSorting}>
          Sort {sort ? "Descending" : "Ascending"}
        </button>
      </div>

      <ul className={classes.list}>
        {sortedData.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
