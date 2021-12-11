import QuoteForm from "../components/quotes/QuoteForm";
import {IQuote} from "../types";
import {useHistory} from "react-router-dom";

const NewQuote = () => {
  const history = useHistory()
  const addQuoteHandler = (quote: IQuote) => {
    console.log({quote})
    history.push('/quotes')
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={false}/>
  )
};
export default NewQuote
