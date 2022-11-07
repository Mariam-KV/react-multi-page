import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  let handleDelete = () => {
    fetch(
      `https://react1-9a97e-default-rtdb.firebaseio.com/comments/${props.itemId}/${props.id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      props.onFetch(Math.random());
    });
  };

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <div onClick={handleDelete} className="btn">
        Delete
      </div>
    </li>
  );
};

export default CommentItem;
