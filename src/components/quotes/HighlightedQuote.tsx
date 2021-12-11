import classes from './HighlightedQuote.module.css';
import React, {FC} from "react";
import {IQuote} from "../../types";

const HighlightedQuote: FC<IQuote> = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
