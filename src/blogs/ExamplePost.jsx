import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class ExamplePost extends Component {

  render() {
    return (
      <div className="Page blog-post">
        <p><Link to="/blog">&larr; Back to Blog</Link></p>
        <h1 className="sectionTitle">Example Blog Post</h1>
        <p className="blog-date">March 22, 2026</p>

        <p>This is a placeholder blog post. Replace this content with your actual blog post text.</p>

        <p>You can include multiple paragraphs of text, inline links, and figures as needed.</p>

        <figure>
          <img src="/images/blog/placeholder.png" alt="Placeholder figure" />
          <figcaption>Figure 1: A placeholder figure caption.</figcaption>
        </figure>

        <p>Continue writing the rest of your post below the figure.</p>
      </div>
    );
  }
}

export default ExamplePost;
