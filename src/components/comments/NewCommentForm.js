import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { addComment } from "../../lib/api";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  let { sendRequest, status, error } = useHttp(addComment);
  let { onAddedComment } = props;
  useEffect(() => {
    if (!error && status === "completed") {
      onAddedComment();
    }
  }, [error, status, onAddedComment]);
  const submitFormHandler = (event) => {
    event.preventDefault();

    let comment = commentTextRef.current.value;
    if (comment.trim().length !== 0) {
      sendRequest({ commentData: { commentData: comment }, quoteId: props.id });
    } else {
      alert("Please enter something!");
    }

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
