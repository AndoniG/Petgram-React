import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import ApolloClient from 'apollo-boost'; // PERMITE INICIALIZAR APOLLO SIN CONFIGURACIONES
import { ApolloProvider } from 'react-apollo' // PERMITE A REACT UTILIZAR APOLLO
import { StateProvider, initialState, reducer } from './Context'

const client = new ApolloClient({
    uri: 'https://petgram-server-andoni-jqbden0li.now.sh/graphql',
    request: operation => {
        const token = window.sessionStorage.getItem('token');
        const authorization = token ? `Bearer ${token}` : '';
        operation.setContext({
            headers: {
                authorization
            }
        })
    },
    onError: error => {
        const { networkError } = error;
        if (networkError && networkError.result.code === 'invalid_token') {
            window.sessionStorage.removeItem('token');
            window.location.href = '/'
        }
    }
})

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </StateProvider>,
    document.getElementById("app")
);
