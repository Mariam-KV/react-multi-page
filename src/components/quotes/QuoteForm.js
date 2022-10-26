import { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  let [entered, setEntered] = useState(false);
  let [isValid, setValid] = useState(false);
  let [valueAuthor, setAuthor] = useState("");
  let [valueText, setText] = useState("");
  function submitFormHandler(event) {
    event.preventDefault();

    props.onAddQuote({ author: valueAuthor, text: valueText });
  }

  let handleClick = () => {
    setEntered(false);
  };
  let handleFocus = () => {
    setEntered(true);
  };
  let handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  let handleText = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    if (valueAuthor.trim().length > 0 && valueText.trim().length > 0) {
      setValid(true);
    }
  }, [valueAuthor, valueText]);
  return (
    <Card>
      <Prompt when={entered} message="Are you sure?" />
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={handleFocus}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={valueAuthor}
            onChange={handleAuthor}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows="5"
            value={valueText}
            onChange={handleText}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button
            className={isValid ? "btn" : "btn invalid"}
            onClick={handleClick}
            disabled={!isValid}
          >
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
