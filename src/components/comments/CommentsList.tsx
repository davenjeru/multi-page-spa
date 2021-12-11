import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';
import React, {FC} from "react";
import {IComment} from "../../types";

const CommentsList: FC<{ comments: IComment[] }> = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text}/>
      ))}
    </ul>
  );
};

export default CommentsList;
