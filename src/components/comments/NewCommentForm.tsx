import React, {FC, FormEvent, useEffect, useRef} from 'react';

import classes from './NewCommentForm.module.css';
import useHttp from "../../hooks/use-http";
import {addComment} from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm: FC<{ onAddedComment: Function, quoteId: string }> = (props) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const {sendRequest, status, error} = useHttp(addComment)
  const {onAddedComment, quoteId} = props

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment()
    }
  }, [status, error, onAddedComment])

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    // optional: Could validate here

    const enteredText = commentTextRef.current!.value;
    sendRequest({commentData: {text: enteredText}, quoteId})
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && <div className="centered"><LoadingSpinner/></div>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows={5} ref={commentTextRef} required/>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
