import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class SyntheMolMerckPost extends Component {

  render() {
    return (
      <div className="Page blog-post">
        <p><Link to="/blog">&larr; Back to Blog</Link></p>
        <h1 className="sectionTitle">Generative AI to Design Small Molecule Therapeutics: Lessons from a Stanford/Merck collaboration</h1>
        <p className="blog-date">March 30, 2026</p>

        <p style={{ textAlign: "center" }}>
          Kyle Swanson<sup>1</sup>, James Zou<sup>1,2</sup>, Maria Chiriac<sup>3</sup>, Alan Cheng<sup>3</sup>
        </p>
        <p>
          <sup>1</sup>Department of Computer Science, Stanford University<br />
          <sup>2</sup>Department of Biomedical Data Science, Stanford University<br />
          <sup>3</sup>Discovery Chemistry, Merck &amp; Co., Inc., South San Francisco, CA, USA
        </p>

      </div>
    );
  }
}

export default SyntheMolMerckPost;
