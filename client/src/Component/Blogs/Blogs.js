import React, { useState } from "react";
import "./blogs.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Link,
} from "react-router-dom";
import Article from "./Article/Article";
const Blogs = (props) => {
  const history = useHistory();
  const showBlog = (path) => {
    console.log("asjfjghfhjg");
    axios
      .get(
        `https://scrapingass.herokuapp.com/article?path=${props.blog.article}`
      )
      .then((response) => {
        console.log(response.data);
        props.updateBlog(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });

    history.push(`/search/${props.tag}/path/${path}`);
  };
  return (
    <Router>
      <div className="blog-container">
        <div onClick={() => showBlog(props.blog.article.slice(19))}>
          <div className="preview-content author">
            <i class="fa fa-user" aria-hidden="true"></i>
            {props.blog.author}
          </div>

          {props.blog.src ? (
            <div className="preview-image-container">
              <img
                className="preview-content preview-image"
                src={props.blog.src}
                alt="preview image"
              />
            </div>
          ) : null}

          <h2 className="preview-content blog-title">{props.blog.title}</h2>

          <div className="preview-content details">
            {props.blog.details}read more
          </div>
          <div className="preview-content response">{props.blog.responses}</div>
        </div>
      </div>
    </Router>
  );
};

export default Blogs;
