import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function Search() {
  const [status, setStatus] = useState("");
  const [urlParam, setUrlParam] = useState("");

  const { paraUri } = useParams();
  setUrlParam(paraUri);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a8fa805eb05642b5897838122c877de2";

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     console.log(json.status);
    //     setStatus(json.status);
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Search</h1>
      <h3 className="text-center">${paraUri}</h3>
      <p>${status}</p>
    </div>
  );
}

export default Search;
