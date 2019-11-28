import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://movies-graphql-server.herokuapp.com/"
})

export default client;