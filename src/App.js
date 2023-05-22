import './App.css';
import Countries from './Components/Countries';
import { ApolloProvider, throwServerError } from '@apollo/client'
import one from './Clients/one';
import Continents from './Components/Continents';
function App() {
  return (
    <>
      <h3> Countries List </h3>
     <ApolloProvider client={one}>
         <Countries />
     </ApolloProvider>
     <h3> Continents List </h3>
     <ApolloProvider client={one}>
         <Continents />
     </ApolloProvider>
    </>
  );
}

export default App;
