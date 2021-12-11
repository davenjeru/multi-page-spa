import classes from './QuoteItem.module.css';
import React, {FC} from "react";
import {IQuote} from "../../types";
import {Link} from 'react-router-dom';

const QuoteItem: FC<IQuote> = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
