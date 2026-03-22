import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import blogPosts from "./blogs/blogRegistry";

class BlogListPage extends Component {

  render() {
    return (
      <div className="Page">
        <h1 className="sectionTitle">Blog</h1>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div key={post.slug} className="blog-entry">
              <Link to={`/blog/${post.slug}`}>
                <h2 className="blog-entry-title">{post.title}</h2>
              </Link>
              <p className="blog-date">{new Date(post.date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              <p>{post.summary}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogListPage;
