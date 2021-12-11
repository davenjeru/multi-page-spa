import React, {FC, Fragment} from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {IQuote} from "../../types";

const QuoteList: FC<{quotes: IQuote[]}>= (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
