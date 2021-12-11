import classes from './CommentItem.module.css';
import React, {FC} from "react";

const CommentItem: FC<{ text: string }> = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
