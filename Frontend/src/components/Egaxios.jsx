import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const Egaxios = () => {
  var [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log("failed to fetch", err));
  }, []);

  return (
    <>
      <h1>Fecting data from Json Placaholder</h1>
      <h2>Post are </h2>
      <div style={{ display: "flex" }}>
        <ol>
          {post.map((data, index) => (
            <li>{data.title}</li>
          ))}
        </ol>

        <ol>
          {post.map((data, index) => {
            return <li key={index}>{data.body}</li>;
          })}
        </ol>
      </div>
    </>
  );
};
