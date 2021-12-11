import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import {IQuote} from "../types";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES: IQuote[] = [
  {id: 'q1', author: 'Dave Mathews', text: 'This is a fun quote'},
  {id: 'q2', author: 'Matt Watson', text: 'Click the link on the pop up banner'},
  {id: 'q3', author: 'Max', text: 'Math is fun'},
]

const QuoteDetail = () => {
  const params: any = useParams()
  const {quoteId} = params
  const routeMatch = useRouteMatch()



  const quote = DUMMY_QUOTES.find(q => q.id === quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link className='btn--flat' to={`${routeMatch.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}><Comments/></Route>
    </Fragment>
  )
};
export default QuoteDetail
