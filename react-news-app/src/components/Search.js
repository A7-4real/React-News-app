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
  let [path, setPath] = useState([]);
  let [metadata, setMetadata] = useState([]);
  const [urlParam, setUrlParam] = useState("");

  let { url } = useParams();
  // setUrlParam(url);

  useEffect(() => {
    const uri = "http://127.0.0.1:5000/imagesearch/" + url;
    let results = [];

    const fetchData = async () => {
      try {
        const response = await fetch(uri);
        const json = await response.json();
        // console.log(json.articles[0]["source"]);
        // setStatus(json.status);
        json.map((element) => {
          console.log(element.path);
          setPath(element.path);
          console.log(element.metadata.src);
          setMetadata(element.metadata);
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    // setArticles(metadata);

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Search</h1>
      <h2>Matched Image - </h2>
      <img src={path} alt={path} width="300" height="200" />
      <div className="text-center">
        {metadata.map((Element) => {
          return (
            <div>
              <h3>{Element.heading}</h3>
              <br></br>
              <p>{Element.context}</p>
              <div className="related-image">
                {Element.img_url.map((element) => {
                  return (
                    <div>
                      <img
                        src={element}
                        alt={element}
                        width="150"
                        height="100"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* <h3 className="text-center">
        {articles.map((Element) => {
          return (
            <div>
              {" "}
              <img
                src="https://www.boomlive.in/h-upload/2022/05/11/500x300_976944-blood-pressure.webp"
                alt={Element.path}
                width="300"
                height="200"
              />
            </div>
          );
        })}
      </h3> */}
    </div>
  );
}

export default Search;
