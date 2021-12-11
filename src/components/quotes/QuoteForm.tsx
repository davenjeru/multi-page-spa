import React, {FC, FormEvent, useRef} from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {IQuote} from "../../types";

interface QuoteFormProps {
  onAddQuote(quote: IQuote): void,

  isLoading: boolean
}

const QuoteForm: FC<QuoteFormProps> = (props) => {
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(event: FormEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    props.onAddQuote({author: enteredAuthor, text: enteredText});
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner/>
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows={5} ref={textInputRef}/>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
