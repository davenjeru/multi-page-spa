import React, {FC, FormEvent, Fragment, useRef, useState} from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {IQuote} from "../../types";
import {Prompt} from "react-router-dom";

interface QuoteFormProps {
  onAddQuote(quote: IQuote): void,

  isLoading: boolean
}

const QuoteForm: FC<QuoteFormProps> = (props) => {
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const [isEntering, setIsEntering] = useState(false)


  function submitFormHandler(event: FormEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here
    props.onAddQuote({author: enteredAuthor, text: enteredText, id: Math.random().toString()});
  }
  const finishEnteringForm = () => setIsEntering(false)

  const formFocusHandler = () => {
    setIsEntering(true)
  }

  return (
    <Fragment>
      <Prompt when={isEntering} message={() => 'Are you sure you want to leave? All your entered data will be lost'}/>
      <Card>
        <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
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
            <button className='btn' onClick={finishEnteringForm}>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
