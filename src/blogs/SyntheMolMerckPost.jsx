import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class SyntheMolMerckPost extends Component {

  render() {
    return (
      <div className="Page blog-post">
        <p><Link to="/blog">&larr; Back to Blog</Link></p>
        <h1 className="sectionTitle">Generative AI to Design Small Molecule Therapeutics: Lessons from a Stanford/Merck collaboration</h1>
        <p className="blog-date">March 22, 2026</p>

        <p>I was fortunate to collaborate with Merck to apply SyntheMol-RL, a generative AI model I built at Stanford to design small molecule drugs, to two of their internal drug discovery programs. This post is a summary of the project and the lessons we learned.</p>
      </div>
    );
  }
}

export default SyntheMolMerckPost;
