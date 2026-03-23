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

        <p><span style={{ fontWeight: "bold" }}>Problem 1: Experimental Data.</span> Many generative AI models aim to design a binder to a target using the target structure alone without leveraging experimental data of already known binders. Although this is a challenging and impressive setting, very often in real-world drug discovery, scientists already have a collection of molecules that are known to bind to the target, either through academic literature, patents, or their own internal experiments. This data is extremely valuable and could potentially significantly improve the ability of generative models, but most models don't have a way to incorporate this type of data.</p>

        <p><span style={{ fontWeight: "bold" }}>Problem 2: Therapeutic Modality.</span> Generative models often focus on protein and natural peptide binder design. While there is huge therapeutic potential for antibodies and peptides, generative models have so far been less developed and less practically useful in small molecule drug design. Small molecules have many benefits compared to antibodies and peptides, such as lower cost of goods, broader patient access, and more convenient route of administration (oral tablets rather than injections). As a great example, there is currently <a href="https://www.science.org/content/article/companies-seek-second-obesity-treatment-revolution-pill-form" target="_blank">huge interest</a> in developing a small molecule weight loss drug that can be taken orally in place of the current peptide drugs Ozempic and Zepbound, which must be injected.</p>

        <p><span style={{ fontWeight: "bold" }}>Problem 3: Druglike Properties.</span> Many generative AI models for drug design focus exclusively on designing binders for a specific protein target. While binding is a necessity, drug efficacy and safety are determined by a wide range of properties, such as absorption, distribution, metabolism, excretion, and toxicity (ADMET) properties for small molecules and developability properties for biologics. Additionally, synthesizability is essential so that the drug can be both tested in the lab and manufactured at scale. Ensuring that a binder possesses the full range of druglike properties is therefore crucial and can take years to get right, but this consideration is often left out of generative models.</p>

        <p>We wanted to try to tackle these problems with generative AI in a real-world drug discovery setting, so we partnered to work on two internal drug discovery programs at Merck (known as MSD outside of the United States and Canada): a human therapeutic program and an antibacterial program. Both programs have precisely these three problems: they are small molecule drug design programs with challenging ADMET issues and with a wealth of existing experimental data for the target of interest. We took our (K.S. and J.Z.) recent generative AI model for small molecule design called <a href="https://www.biorxiv.org/content/10.1101/2025.05.17.654017v1" target="_blank">SyntheMol-RL</a>, which we previously applied to antibiotic design in an academic setting, and we spent the past year adapting it to these two real-world proprietary drug discovery programs at Merck.</p>

        <p>Below, we share our experience and our takeaways working on these two programs. The collaboration between scientists at Stanford and Merck was immensely rewarding, as it gave us a window into the challenges of real-world drug discovery and taught us the strengths of current generative AI models for drug design as well as the many limitations that still need to be addressed by academic and drug discovery researchers like ourselves.</p>

        <h2>SyntheMol-RL: generative AI for synthesizable small molecule design</h2>

        <p>Before diving into the two drug discovery programs at Merck, we'll briefly introduce <a href="https://www.biorxiv.org/content/10.1101/2025.05.17.654017v1" target="_blank">SyntheMol-RL</a>, our generative AI method for small molecule drug design (<FigureRef label="synthemol" />). The SyntheMol-RL code is fully open source <a href="https://github.com/swansonk14/SyntheMol" target="_blank">here</a>.</p>

        <Figure label="synthemol" caption={<>SyntheMol is a generative AI method for synthesizable small molecule design that uses either a Monte Carlo tree search (SyntheMol-MCTS) or reinforcement learning (SyntheMol-RL). SyntheMol exclusively generates molecules within a combinatorial chemical space composed of molecular building blocks and chemical reactions, and it uses trained molecular property predictors to score generated molecules to find the best drug candidates. These molecules can then be easily synthesized and experimentally validated. (Figure reproduced from the original <a href="https://www.nature.com/articles/s42256-024-00809-7" target="_blank">SyntheMol paper</a>.)</>}>
          <img src="/images/blog/synthemol_merck/synthemol.svg" alt="SyntheMol is a generative AI method for synthesizable small molecule design." />
        </Figure>

        <p>SyntheMol-RL uses reinforcement learning (RL) to generate molecules by identifying combinations of two to three available molecular building blocks (i.e., small fragments of molecules) that can be combined with a known chemical reaction into a single molecule that possesses one or more desired properties. The properties of the molecules (e.g., potency against a protein target) are predicted by property predictors (e.g., graph neural networks like <a href="https://github.com/chemprop/chemprop" target="_blank">Chemprop</a>), which are trained on existing data of small molecules paired with known property values. During generation, SyntheMol-RL iteratively selects combinations of building blocks paired with a chemical reaction to form a molecule, which is scored by the property predictors. Over time, an internal RL model learns which combinations of building blocks lead to molecules with the best properties. Notably, by exclusively generating molecules using building blocks that are easy to buy and chemical reactions that are easy to run, such as those in the <a href="https://enamine.net/compound-collections/real-compounds/real-space-navigator" target="_blank">Enamine REAL Space</a> or the <a href="https://www.biosolveit.de/chemical-spaces/" target="_blank">WuXi GalaXi</a>, SyntheMol-RL makes it easy to synthesize generated molecules for experimental validation, which is not the case for many other small molecule generative AI models.</p>

        <p>We previously demonstrated the potential of SyntheMol-RL by applying it to antibiotic discovery in an academic setting with the help of our incredible collaborators at McMaster University (<FigureRef label="synthemol-rl" />). Specifically, we trained SyntheMol-RL to generate molecules that are soluble in water and could inhibit the growth of the bacterium <span style={{ fontStyle: "italic" }}>Staphylococcus aureus</span>, which is responsible for staph infections. We synthesized and tested 79 AI-generated compounds and found that 13 of them were potent in vitro, of which seven were structurally novel. One of the molecules, which we called synthecin, was effective in treating mice infected by methicillin-resistant <span style={{ fontStyle: "italic" }}>S. aureus</span> (MRSA), a particularly nasty variant of the bacterium.</p>

        <Figure label="synthemol-rl" caption={<>Experimental results of molecules generated by SyntheMol-RL. (top) SyntheMol-RL (specifically, two variants called RL-Chemprop and RL-MLP) generated more molecules capable of inhibiting the growth of <span style={{ fontStyle: "italic" }}>S. aureus</span> than other generative (MCTS) and virtual screening (VS-Chemprop) methods. (bottom left) The most effective molecule in the in vitro growth inhibition experiments, which we called synthecin, was generated by SyntheMol-RL. (bottom right) Synthecin effectively inhibited the growth of methicillin-resistance <span style={{ fontStyle: "italic" }}>S. aureus</span> in a mouse skin infection model. (Figure reproduced from the <a href="https://www.biorxiv.org/content/10.1101/2025.05.17.654017v1" target="_blank">SyntheMol-RL paper</a>.)</>}>
          <img src="/images/blog/synthemol_merck/synthemol-rl.svg" alt="SyntheMol-RL designed effective antibiotic candidates for Staphylococcus aureus." />
        </Figure>

        <p>While this application of SyntheMol-RL was very promising, we were excited to see how SyntheMol-RL would translate to more complex drug discovery pipelines at Merck.</p>

        <h2>Balancing experimental and computational potency data for a human therapeutics program</h2>

        <p>The first small molecule therapeutic target was a human protein with enzymatic activity. Researchers at Merck have been working on the target for several years, so they have a wealth of data on the target, including about 8k small molecules with experimentally validated biochemical potency.</p>

        {/* TODO: missing figures */}
        <Figure label="human-potency" caption={<>Distribution of the biochemical potency of ~8k small molecules against the target. (left) The full distribution of potency values detected in the assay. (right) The distribution of potency values less than 200 nM, with three potency thresholds from strong (25 nM) to weak (100 nM).</>}>
          <img src="/images/blog/synthemol_merck/human-potency-full.svg" alt="Full distribution of the biochemical potency of ~8k small molecules against the target." />
          <img src="/images/blog/synthemol_merck/human-potency-200nM.svg" alt="Distribution of the biochemical potency of ~8k small molecules against the target less than 200 nM." />
        </Figure>

      </div>
    </FigureProvider>
  );
}

export default SyntheMolMerckPost;
