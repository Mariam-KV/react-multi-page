import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  let handleDelete = () => {
    fetch(
      `https://react-projects-160bb-default-rtdb.firebaseio.com/multi-page/comments/${props.itemId}/${props.id}.json`,
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
