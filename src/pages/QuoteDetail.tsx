import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params: any = useParams()
  const {quoteId} = params
  const routeMatch = useRouteMatch()

  const {data: quote, sendRequest, error, status} = useHttp(getSingleQuote, true)


  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return <div className="centered"><LoadingSpinner/></div>
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

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
