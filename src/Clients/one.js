import { ApolloClient, InMemoryCache } from '@apollo/client'


const two = new ApolloClient({
    uri:'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
})
export default two;