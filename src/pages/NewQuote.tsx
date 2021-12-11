import QuoteForm from "../components/quotes/QuoteForm";
import {IQuote} from "../types";
import {useNavigate} from "react-router-dom";
import {addQuote} from "../lib/api";
import useHttp from "../hooks/use-http";
import {useEffect} from "react";

const NewQuote = () => {
  const navigate = useNavigate()

  const {sendRequest, status} = useHttp(addQuote)

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes')
    }
  }, [navigate, status])

  const addQuoteHandler = async (quote: IQuote) => {
    await sendRequest(quote)
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'}/>
  )
};
export default NewQuote
