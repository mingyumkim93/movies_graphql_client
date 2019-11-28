import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://movies-graphql-react.herokuapp.com/"
})

export default client;