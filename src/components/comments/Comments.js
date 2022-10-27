import { useState, useCallback, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllComments } from "../../lib/api";
import { Route, Link } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

import CommentList from "./CommentsList";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  let { sendRequest, data, error, status } = useHttp(getAllComments, true);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  let id = props.id;
  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);
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
  console.log(data);
  //if (status === "completed" && !data.commentData) {
  //return <p className="centered">No comments found</p>;
  //}
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <Link
          className="btn"
          onClick={startAddCommentHandler}
          to={`/allQuotes/${id}/comments`}
        >
          Add a Comment
        </Link>
      )}
      <Route path={`/allQuotes/${id}/comments`}>
        {isAddingComment && (
          <NewCommentForm id={id} onAddedComment={handleAddComments} />
        )}
        <div>
          {data.length !== 0 ? (
            <CommentList comments={data} />
          ) : (
            <p className="centered">No comments were addded yet!</p>
          )}
        </div>
      </Route>
    </section>
  );
};

export default Comments;
