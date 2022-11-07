import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem
          itemId={props.itemId}
          key={comment.id}
          text={comment.commentData}
          id={comment.id}
          onFetch={props.onFetch}
        />
      ))}
    </ul>
  );
};

export default CommentsList;
