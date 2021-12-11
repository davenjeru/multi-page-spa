import {IQuote} from "../types";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES: IQuote[] = [
  {id: 'q1', author: 'Dave Mathews', text: 'This is a fun quote'},
  {id: 'q2', author: 'Matt Watson', text: 'Click the link on the pop up banner'},
  {id: 'q3', author: 'Max', text: 'Math is fun'},
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
};
export default AllQuotes
