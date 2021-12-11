import React, {FC, Fragment} from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {IQuote} from "../../types";
import {useHistory, useLocation} from "react-router-dom";

const sortQuotesAscending = (a: IQuote, b: IQuote) => a.id! > b.id! ? 1 : -1
const sortQuotesDescending = (a: IQuote, b: IQuote) => a.id! < b.id! ? 1 : -1

const sortQuotes = (quotes: IQuote[], ascending: boolean) => (
  quotes.sort(ascending ? sortQuotesAscending : sortQuotesDescending)
)

const QuoteList: FC<{ quotes: IQuote[] }> = (props) => {
  const history = useHistory()

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `sort=${isSortingAscending ? 'desc' : 'asc'}`
    })
    // history.push(`${location.pathname}/?sort=${isSortingAscending ? 'desc' : 'asc'}`);
  };

  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  console.log({queryParams})

  const isSortingAscending = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
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
