import React from "react";
import "./article.css";

const Article = (props) => {
  console.log(props.blog);
  return (
    <div className="article-container">
      <h2 className="article-title">{props.blog.title}</h2>
      <div className="para-container">
        <p className="para">{props.blog.para}</p>
      </div>
      <div className="response">{props.blog.response} Claps</div>
    </div>
  );
};

export default Article;
