import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from './App';

//import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
});

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
