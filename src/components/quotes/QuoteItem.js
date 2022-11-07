import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  let handleDelete = () => {
    fetch(
      `https://react1-9a97e-default-rtdb.firebaseio.com/quotes/${props.id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      props.onFetch(Math.random());
    });
  };
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/allQuotes/${props.id}`}>
        View
      </Link>
      <div className="btn" onClick={handleDelete}>
        Delete
      </div>
    </li>
  );
};

export default QuoteItem;
