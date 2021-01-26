import React, { useState, useEffect } from "react";
import Blogs from "./Component/Blogs/Blogs";
import axios from "axios";
import "./App.css";
import Article from "./Component/Blogs/Article/Article";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [tag, setTag] = useState("");
  const [count, setCount] = useState(0);
  const [blog, setBlog] = useState("");
  const [searched, setSearched] = useState(false);

  const updateBlog = (data) => {
    setBlog(data);
  };
  const searchNext = () => {
    setCount(count + 10);
    searchBlogs();
    setSearched(true);
  };

  useEffect(() => {
    setBlogs([
      "crawling",
      "crawling",
      "crawling",
      "crawling",
      "crawling",
      "crawling",
      "crawling",
      "crawling",
      "crawling",
      "crawling",
    ]);
    axios
      .get(`https://scrapingass.herokuapp.com/search?tag=${tag}&count=${count}`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });

    setSearched(false);
  }, [count, searched]);

  const searchBlogs = (value) => {
    if (value) {
      setCount(10);
      setSearched(true);
    }
  };
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <h1 className="medium">Search on Medium</h1>
          <div className="search-container">
            <input
              type="search"
              className="search"
              placeholder="
              Search tags..."
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Link to={`/search/${tag}/${count}`}>
              <button className="search-btn" onClick={() => searchBlogs(10)}>
                Search
              </button>
            </Link>
          </div>
        </Route>
        <Route exact path="/search/:tag/:count">
          <div className="app-container">
            <div className="blogs-container">
              <Link to={`/search/${tag}/${count}`}>
                <div className="heading">
                  <h1 className="blogs-title ">{tag}</h1>
                  <i
                    className="fa fa-angle-double-right fa-2x"
                    aria-hidden="true"
                    onClick={searchNext}
                  ></i>
                </div>
              </Link>
              <div className="blogs-title">STORIES</div>
              {Array.isArray(blogs)
                ? blogs.map((blog) => {
                    if (blog === "crawling") {
                      return <h1>{blog}</h1>;
                    } else {
                      return (
                        <Blogs tag={tag} blog={blog} updateBlog={updateBlog} />
                      );
                    }
                  })
                : null}
            </div>
          </div>
        </Route>

        <Route path="/search/:tag/path/:path">
          <Article blog={blog} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
