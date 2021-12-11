import QuoteForm from "../components/quotes/QuoteForm";
import {IQuote} from "../types";
import {useHistory} from "react-router-dom";
import {addQuote} from "../lib/api";
import useHttp from "../hooks/use-http";
import {useEffect} from "react";

const NewQuote = () => {
  const history = useHistory()

  const {sendRequest, status} = useHttp(addQuote)

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes')
    }
  }, [history, status])

  const addQuoteHandler = async (quote: IQuote) => {
    await sendRequest(quote)
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'}/>
  )
};
export default NewQuote
