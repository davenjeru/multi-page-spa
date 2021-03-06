import {Reducer, useCallback, useReducer} from 'react';

type HttpState = {
  data: any,
  error: string | null,
  status: 'pending' | 'completed' | null,
}

type HttpAction = {
  responseData?: any,
  errorMessage?: string
  type: 'SEND' | 'SUCCESS' | 'ERROR'
}

const httpReducer: Reducer<HttpState, HttpAction> = (state, action) => {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData!,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage!,
      status: 'completed',
    };
  }

  return state;
};

const useHttp = (requestFunction: Function, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData?) => {
      dispatch({type: 'SEND'});
      try {
        const responseData = await requestFunction(requestData);
        dispatch({type: 'SUCCESS', responseData});
      } catch (error: any) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
