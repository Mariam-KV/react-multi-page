import { useState, useCallback, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllComments } from "../../lib/api";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentsList";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  let [deleting, setDelete] = useState("");
  let { sendRequest, data, error, status } = useHttp(getAllComments, true);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  let id = props.id;
  useEffect(() => {
   
    sendRequest(id);
  }, [sendRequest, id, deleting]);
  let handleAddComments = useCallback(() => {
    sendRequest(id);
    setIsAddingComment(false);
  }, [sendRequest, id]);
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

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}

      {isAddingComment && (
        <NewCommentForm id={id} onAddedComment={handleAddComments} />
      )}
      <div>
        {data.length !== 0 ? (
          <CommentList comments={data} itemId={id} onFetch={setDelete} />
        ) : (
          <p className="centered">No comments were addded yet!</p>
        )}
      </div>
    </section>
  );
};

export default Comments;
