import classes from './QuoteItem.module.css';
import React, {FC} from "react";
import {IQuote} from "../../types";

const QuoteItem: FC<IQuote> = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn'>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
