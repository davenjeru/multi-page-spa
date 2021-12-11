import React, {Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const App = () => (
  <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/quotes' replace/>}/>
        <Route path='/quotes' element={<AllQuotes/>}/>
        <Route path='/quotes/:quoteId/*' element={<QuoteDetail/>}/>
        <Route path='/new-quote' element={<NewQuote/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Layout>
  </Suspense>
);

export default App;
