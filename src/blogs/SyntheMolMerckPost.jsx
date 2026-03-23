import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FigureProvider, Figure, FigureRef } from "./FigureContext";

function SyntheMolMerckPost() {
  return (
    <FigureProvider>
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

        <h2>Introduction</h2>

        <p>Generative AI has been a hot topic in drug discovery for years, and recently, it seems as if there's a new generative model almost every day, with recent examples including <a href="https://www.biorxiv.org/content/10.1101/2025.09.18.676967v2" target="_blank">RFdiffusion3</a> and <a href="https://boltz.bio/boltzgen" target="_blank">BoltzGen</a>. However, with every new paper, we ask the same question: do these major advances, which are legitimately groundbreaking and exciting from a technical perspective, translate to real-world improvements in drug discovery that ultimately benefit patients?</p>

        <p>Reflecting on this question, we believe there are three areas where many <a href="https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.1608" target="_blank">current generative models</a> fall short (<FigureRef label="three-problems" />).</p>

        <Figure label="three-problems" caption={<>Three problems ignored by many recent generative AI models for biomolecule design. (left) Experimental Data: Models often only use the protein target structure (top), ignoring extremely useful experimental data on known binders that could also be used to inform binder design (bottom). (middle) Therapeutic Modality: Models often only generate proteins and natural peptides (top) and not small molecules (bottom) due to the relative ease of synthesizing and experimentally validating proteins and natural peptides, despite the many advantages of small molecules like an oral route of administration and cost of goods. (right) Druglike Properties: Models often exclusively focus on binder potency (top), ignoring the wide range of properties beyond potency that are necessary in a drug (bottom). (PDB structures <a href="https://www.rcsb.org/structure/1X70" target="_blank">1X70</a> and <a href="https://www.rcsb.org/structure/8SK7" target="_blank">8SK7</a> visualized with PyMol.)</>}>
          <img src="/images/blog/synthemol_merck/three_problems.svg" alt="Three problems ignored by many recent generative AI models for biomolecule design." />
        </Figure>

      </div>
    </FigureProvider>
  );
}

export default SyntheMolMerckPost;
