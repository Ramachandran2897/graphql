import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
const Home = () => {
  //   const GET_LOCATIONS = gql`
  //   {
  //     staff(id: ${launchId}){
  //       name
  //     }
  //   }
  // `;
  const GET_LOCATIONS = gql`
  query LaunchDetails($launchId: ID!) {
    staff(id: $launchId){
      name
    }
  }
`;
  var launchId = 1;
const {error, data, loading} = useQuery(GET_LOCATIONS, { variables: { launchId } });
console.log('data',data);
console.log('error',error);
console.log('loading',loading)
    return (
        <div>
            {data && data.staffs.map((obj)=><p>{obj.name}</p>)}
        </div>
    )
}
export default Home