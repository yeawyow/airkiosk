import * as React from "react";
import { useGetAllAttractionsQuery } from "../app/services/attraction";

export default function TestPatient() {
  const cid = "3460100321128";
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetAllAttractionsQuery(cid);
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <ul>
            {data.map((attraction) => (
              <li key={attraction.cid}>
                {attraction.Hn}
                {attraction.fname}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <li> ไม่พบข้อมูล</li>
      )}
    </div>
  );
}
