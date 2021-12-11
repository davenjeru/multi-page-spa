import {Link, Route, Routes, useParams} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params: any = useParams()
  const {quoteId} = params

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
      <Routes>
        <Route path='/' element={
          (
            <div className="centered">
              <Link className='btn--flat' to='comments'>Load Comments</Link>
            </div>
          )
        }/>
        <Route path='comments' element={<Comments/>}/>
      </Routes>
    </Fragment>
  )
};
export default QuoteDetail
