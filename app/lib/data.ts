import { cache } from "react";

/**
    I use cache to memoize the function and avoid fetching the data multiple 
    times when the user navigate between pages, because the data is static and 
    doesn't change frequently. This will improve the performance of the app and 
    reduce the load on the server.
 * 
 */

export const getPlaces = cache(async () => {  

  const res = await fetch("https://raw.githubusercontent.com/rihal-om/rihal-codestacker/refs/heads/main/FE/data.json"); 

  if (!res.ok) {
    return new Response("Error fetching data", {status: 500})
  }

  return res.json();
});