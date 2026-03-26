import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FigureProvider, Figure, FigureRef, Table, TableRef } from "./FigureContext";

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
          <img src="/images/blog/synthemol_merck/three-problems.svg" alt="Three problems ignored by many recent generative AI models for biomolecule design." />
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

        <p>As you can see in <FigureRef label="human-potency" />, the team already has many highly potent compounds, including 95 with single digit nanomolar potency, so why do we need more? Unfortunately, for many of the highly potent compounds, we identified potential issues related to their ADMET profile, including possible hERG cardiac channel binding, possible in-vivo clearance that is higher than desired, and possible P-gp efflux higher than desired. Multiparameter optimization problems are frequently encountered in drug discovery, often guided by a mix of biochemical, functional, and <span style={{ fontStyle: "italic" }}>in-vivo</span> assays. Using these assay results, medicinal chemistry teams relentlessly drive towards an optimal pharmacological profile that maximizes the likelihood of clinical success. In parallel to medicinal chemistry efforts to optimize current leads, we worked to identify small molecules with new chemical structures that have potential to be highly potent against the target but have a more desirable ADMET profile.</p>

        <Figure label="human-potency" cols={2} caption={<>Distribution of the biochemical potency of ~8k small molecules against the target. (left) The full distribution of potency values detected in the assay. (right) The distribution of potency values less than 200 nM, with three potency thresholds from strong (25 nM) to weak (100 nM).</>}>
          <img src="/images/blog/synthemol_merck/human-potency-full.svg" alt="Full distribution of the biochemical potency of ~8k small molecules against the target." />
          <img src="/images/blog/synthemol_merck/human-potency-200nM.svg" alt="Distribution of the biochemical potency of ~8k small molecules against the target less than 200 nM, with three potency thresholds from strong (25 nM) to weak (100 nM)." />
        </Figure>

        <p>However, we quickly ran into a problem. Although we have ~8k molecules with experimental potency values, those molecules primarily come from a limited number of chemical series. A property predictor developed using the current dataset will, in general, have good performance for molecules resembling those already known but exhibit limited generalizability to the more novel small molecule structures that we'd like to generate.</p>

        <p>So now it feels like we're stuck. How can we possibly design potent molecules with new chemical structures if we have only experimental data from a limited number of chemical series?</p>

        <Figure label="human-lbdd-sbdd" caption={<>(left) Ligand-based drug design (LBDD), in which ML models are trained on experimental binding affinity data of small molecules tested against the target protein. These models are then applied to score potential small molecule drug candidates based on the small molecule structure alone (no protein structure). LBDD can be done with alternative methods like <a href="https://www.eyesopen.com/rocs" target="_blank">ROCS</a>, which uses ligand shape similarity, but here we focus on ML-based methods. (right) Structure-based drug design (SBDD), in which a model (either physics or ML) uses the 3D structure of the protein target to predict small molecule binding to the protein. Here, PDB structure <a href="https://www.rcsb.org/structure/1X70" target="_blank">1X70</a> is visualized with PyMol. Molecules shown are for illustration purposes only and are taken for unrelated targets in the literature.</>}>
          <img src="/images/blog/synthemol_merck/human-lbdd-sbdd.svg" alt="Ligand-based drug design (LBDD) and structure-based drug design (SBDD)." />
        </Figure>

        <p>One approach is to forget the experimental data entirely (i.e., give up on ligand-based drug design, or LBDD) and use structure-based drug design (SBDD) instead, either with physics-based methods like docking or AI-based methods like <a href="https://arxiv.org/abs/2210.01776" target="_blank">DiffDock</a> or <a href="https://www.biorxiv.org/content/10.1101/2025.06.14.659707v1" target="_blank">Boltz</a> (<FigureRef label="human-lbdd-sbdd" />). Since the target has experimentally determined structures, this is a reasonable approach. However, it seems like a waste to put aside years of experimental data specifically on the target and opt for structure-based design methods that are general in nature and often limited in their accuracy. Is there a way to have the best of both worlds, where we incorporate the chemically narrow but highly valuable experimental data (LBDD) and augment it with use of the protein structure (SBDD)?</p>

        <p>To solve this problem, we decided to adapt the multi-parameter optimization capabilities of SyntheMol-RL. Specifically, SyntheMol-RL can employ both LBDD and SBDD simultaneously by using two property predictors to guide it: one trained on experimental data (LBDD) for the target and one trained on docking data (SBDD) for the target. The experimental property predictor gives us confidence that generated molecules possess at least some characteristics of known potent molecules, even if they don't share the same chemical scaffold and therefore have relatively low scores, while the docking property predictor provides a more generalizable but less accurate estimate of binding to the target regardless of chemical scaffold.</p>

        <p>For the experimental predictor, we trained on the ~8k molecules with experimental on-target potency values (<FigureRef label="human-potency" />). For the docking predictor, we trained on docking scores from ~1.0M molecules from a diverse selection of Enamine REAL Space molecules that were docked using a validated docking protocol (<FigureRef label="docking-scores" />) that used a general docking scoring function along with pharmacophore features for key interactions refined through multiple years of lead optimization.</p>

        <Figure label="docking-scores" cols={2} caption={<>Distribution of docking scores for ~1M molecules docked against the target. Docking scores &lt; -100 were set to -100 and docking scores &gt; 0 were set to 0. (left) The full distribution of docking scores. (right) The distribution of docking scores less than 0, with three docking score thresholds from strong (-50) to weak (-30).</>}>
          <img src="/images/blog/synthemol_merck/docking-scores-full.svg" alt="Full distribution of docking scores for ~1M molecules docked against the target." />
          <img src="/images/blog/synthemol_merck/docking-scores-0.svg" alt="Distribution of docking scores less than 0, with three docking score thresholds from strong (-50) to weak (-30)." />
        </Figure>

        <p>We implemented both property predictors as an ensemble of 10 Chemprop-RDKit models (a variant of Chemprop augmented with 200 features computed with RDKit). The experimental property predictor was trained on log-transformed potency data and achieved an R<sup>2</sup> of 0.66 &plusmn; 0.03, while the docking property predictor was trained on docking scores and achieved an R<sup>2</sup> of 0.76 &plusmn; 0.01 (<FigureRef label="human-chemprop-performance" />).</p>

        <Figure label="human-chemprop-performance" cols={2} caption={<>Performance of Chemprop-RDKit property predictors trained to predict (left) log-transformed experimentally determined on-target potency or (right) on-target docking score for the target.</>}>
          <img src="/images/blog/synthemol_merck/human-chemprop-performance-potency.svg" alt="Performance of Chemprop-RDKit property predictors trained to predict log-transformed experimentally determined on-target potency for the target." />
          <img src="/images/blog/synthemol_merck/human-chemprop-performance-docking.svg" alt="Performance of Chemprop-RDKit property predictors trained to predict on-target docking score for the target." />
        </Figure>

        <p>Note that we technically could have used the docking protocol itself as a property predictor, but SyntheMol-RL needs to make thousands of property predictor calls during generation, so speed is crucial and Chemprop-RDKit is orders of magnitude faster than docking, even if it's less accurate.</p>

        <p>Now that we've trained our property predictors, we're ready to run SyntheMol-RL. During generation, SyntheMol-RL uses a dynamic weighting mechanism, which determines how much weight to put on each of the objectives (i.e., property predictor scores) based on what proportion of recently generated molecules successfully obtain that objective (e.g., high predicted potency or docking score). To define "success" for SyntheMol-RL, we need to specify a "success threshold" for each property that says what score is sufficiently high or low enough to constitute a success. Our knowledge of the target tells us that an experimental potency of less than 25 nM, 50 nM, or 100 nM and a docking score of less than -50, -40, or -30 (scores from MOE Dock Affinity dG scoring) could be reasonable success thresholds, so we experimented with combinations of these thresholds and found that 100 nM and -50 provided the best balance between the two objectives (<FigureRef label="human-weighting" />).</p>

        <Figure label="human-weighting" cols={2} caption={<>The SyntheMol-RL dynamic weighting mechanism balances the two on-target potency objectives &ndash; experimental potency and docking score &ndash; across rollouts (iterations of generation). (left) The rolling average success rate of generated molecules according to both objectives, where experimental success is potency &lt; 100 nM and docking success is docking score &gt; -50. (right) The weight of the experimental potency and docking score objectives set by SyntheMol-RL across rollouts. Note that although the success rates are similar, SyntheMol-RL selects different weights since the two objectives are on different scales.</>}>
          <img src="/images/blog/synthemol_merck/human-success.svg" alt="The rolling average success rate of generated molecules according to both objectives, where experimental success is potency &lt; 100 nM and docking success is docking score &gt; -50." />
          <img src="/images/blog/synthemol_merck/human-weights.svg" alt="The weight of the experimental potency and docking score objectives set by SyntheMol-RL across rollouts." />
        </Figure>

        <p>Using these success thresholds, we ran SyntheMol-RL for 10,000 iterations, which generated 12,796 molecules from the Enamine REAL Space of 30 billion easily synthesizable molecules. The generated molecules have much better predicted experimental potency and predicted docking scores compared to a random sample of 10,000 molecules from the Enamine REAL Space (<FigureRef label="human-vs-real" />). This included 522 molecules with a predicted experimental potency &lt; 100 nM and 2,451 molecules with a predicted docking score &lt; -50.</p>

        <Figure label="human-vs-real" cols={2} caption={<>(left) The distribution of predicted log on-target potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange). (right) The distribution of predicted docking scores for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange).</>}>
          <img src="/images/blog/synthemol_merck/human-vs-real-potency.svg" alt="The distribution of predicted log on-target potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange)." />
          <img src="/images/blog/synthemol_merck/human-vs-real-docking.svg" alt="The distribution of predicted docking scores for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange)." />
        </Figure>

        <p>However, it turns out that the joint objective was too difficult since not even one of the generated molecules had <span style={{ fontStyle: "italic" }}>both</span> a predicted experimental potency &lt; 100 nM and a predicted docking score &lt; -50. Therefore, we relaxed the post-generation docking score threshold to &lt; -40, which gave us 178 molecules that satisfied both objectives (<FigureRef label="human-potency-vs-docking" />). To obtain more of these joint-objective generated molecules, we ran SyntheMol-RL with the same settings but different random seeds four more times and then combined the five sets of generations, for a total of 60,134 generated molecules with 810 that pass both thresholds.</p>

        <Figure label="human-potency-vs-docking" caption={<>The distribution of predicted experimental potency and predicted docking scores for molecules generated by SyntheMol-RL. The lower right quadrant contains 178 molecules that satisfy both objectives simultaneously (predicted experimental potency &lt; 100 nM and predicted docking score &lt; -40).</>}>
          <img src="/images/blog/synthemol_merck/human-potency-vs-docking.svg" alt="The distribution of predicted experimental potency and predicted docking scores for molecules generated by SyntheMol-RL." />
        </Figure>

        <p>Now we're ready to select molecules for synthesis and experimental validation. We could simply select the 810 molecules that pass both the experimental potency and docking score thresholds, but there are several other criteria that we need to consider in addition to those scores. For one thing, we want to know how much we trust those predicted scores, so we want to consider the uncertainty of the predictions from the property predictors. We can measure this with the ensemble variance, or the amount that the prediction varies across the 10 individual Chemprop-RDKit models in each of our property predictors. Additionally, we want to include additional ADMET-related filters, particularly topological polar surface area (TPSA) and PAINS (an indicator of non-specific binding in assays). Finally, we want to ensure that our generated molecules are new chemical structures &ndash; one of our main goals all along &ndash; so we remove generated molecules that are too similar to our known potent compounds. Altogether, we apply the following set of filters:</p>

        <ul>
          <li>Predicted experimental potency &gt; 7.0 log units (&lt; 100 nM)</li>
          <li>Predicted experimental potency uncertainty &lt; 0.3 log units</li>
          <li>Predicted docking score &lt; -40</li>
          <li>TPSA &lt; 100 to bias for CNS exposure</li>
          <li>No PAINS substructures</li>
          <li>No exact match to the chemical scaffolds defined by our current chemical series</li>
          <li>Tanimoto similarity to the most similar known potent compound &lt; 0.6 (using Morgan fingerprints with radius 2 and 2048 bits)</li>
        </ul>

        <p>Applying these filters to the 60,134 generated molecules gives us 488 molecules with an optimal property and novelty profile. As one final computational check, we ran our docking protocol on these selected molecules to confirm their docking score and visualize their binding mode. We manually selected 191 of these Enamine make-on-demand REAL Space molecules for testing, of which 111 were successfully synthesized and tested. Of the 191 molecules, 59 were filtered by Enamine's proprietary filters for ease of chemical synthesis and 21 did not have sufficient yield, a rate consistent with Enamine's guidance. The 111 molecules included two different hypotheses, one around one specific scaffold (25 molecules) and one around novelty (86 molecules) and took around two months to deliver.  We next submitted our new molecules to the target potency assay in multiple batches over several weeks to stay within the current assay weekly capacity. </p>

        <p>Finally, after months of anxious anticipation, we received experimental results, and we were excited to see that four of the compounds were potent, with IC50s &lt; 10uM (potencies of 3.1 uM, 6.1 uM, 6.3 uM, and 7.6 uM). Although the potencies were weaker than we had hoped, these compounds all had novel structures by design, so can potentially address the possible ADMET issues identified in the existing chemical series. Our Merck global predictive ADMET models suggest that all four hits have good Papp (&gt;15 x 10-6 cm/s), low P-gp efflux (ratio &lt;2.5), and low hERG channel binding (IC50 in hERG binding assay &gt;20uM), but display moderate solubility (&lt;50uM in water and simulated intestinal fluid) and short rat MRTs (0.5-1.5 hrs). Our next steps are to attempt a co-crystal structure of the molecules and experimentally assess their ADMET profile.</p>

        <h2>Optimizing many parameters simultaneously for an antibacterial program</h2>

        <p>In parallel with our work on the first target, we tackled a second program at Merck, which introduced us to a new set of interesting, real-world drug discovery challenges, now in the context of antibiotic design. Unlike our academic antibiotic work, where we approach antibiotic development from a phenotypic angle and design molecules that inhibit bacterial growth without a specific protein target in mind, this Merck antibiotic pipeline was focused specifically on a bacterial enzyme present in multiple bacterial species. The goal of the program was to develop a single small molecule that can bind to the antibacterial target across several of the <a href="https://en.wikipedia.org/wiki/ESKAPE" target="_blank">ESKAPE</a> species, a set of bacterial species that are notoriously hard to treat, and deliver a broad-spectrum clinical agent.</p>

        <p>As with the first program, the antibacterial program has experimentally determined potency data for several thousand small molecules. However, unlike the first program, which is a single target in a single species (human), this program involves different orthologs across different bacterial species, and a single molecule can have different potencies in each species due to both differences in the target structure and differences in bacterial cell permeability. Our experimental data reflects this variability as we have 2.4k molecules with potencies that vary across one or more of five bacterial species: <span style={{ fontStyle: "italic" }}>Acinetobacter baumannii</span>, <span style={{ fontStyle: "italic" }}>Escherichia coli</span>, <span style={{ fontStyle: "italic" }}>Klebsiella pneumoniae</span>, <span style={{ fontStyle: "italic" }}>Pseudomonas aeruginosa</span>, and <span style={{ fontStyle: "italic" }}>Staphylococcus aureus</span> (<TableRef label="antibiotic-data" /> and <FigureRef label="antibiotic-potency" />).</p>

        <Table label="antibiotic-data" caption="Number of molecules with experimentally validated potency data for each bacterial species.">
          <table className="blog-table">
            <thead>
              <tr>
                <th>Bacterial species</th>
                <th>Number of Molecules</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><span style={{ fontStyle: "italic" }}>Acinetobacter baumannii</span></td><td>1.0k</td></tr>
              <tr><td><span style={{ fontStyle: "italic" }}>Escherichia coli</span></td><td>1.3k</td></tr>
              <tr><td><span style={{ fontStyle: "italic" }}>Klebsiella pneumoniae</span></td><td>0.6k</td></tr>
              <tr><td><span style={{ fontStyle: "italic" }}>Pseudomonas aeruginosa</span></td><td>0.9k</td></tr>
              <tr><td><span style={{ fontStyle: "italic" }}>Staphylococcus aureus</span></td><td>1.0k</td></tr>
            </tbody>
          </table>
        </Table>

        <Figure label="antibiotic-potency" caption={<>The distribution of log-transformed experimental potency values of 2.4k molecules for the target of interest in each of five bacterial species. (diagonal) Histogram of the log potency values of molecules tested against a single species. (off-diagonal) Scatter plot showing the log potency values of molecules tested against both of each pair of species.</>}>
          <img src="/images/blog/synthemol_merck/antibiotic-potency.svg" alt="The distribution of log-transformed experimental potency values of 2.4k molecules for the target of interest in each of five bacterial species." />
        </Figure>

        <p>As with the first program, Merck had already discovered numerous potent molecules targeting the desired protein, but the majority exhibit suboptimal ADMET properties. One of the key issues is that these molecules can potentially bind the human hERG channel, which may be a cardiovascular risk. Therefore, like the first program, we need to identify molecules with new chemical structures that retain potency while reducing the measured hERG binding. Despite the similarities, this target differs in two major ways.</p>

        <p>First, extensive study of the target, both at Merck and in the broader community, has determined that small molecule binders typically take a specific structure with a linear scaffold of left-hand side (LHS), linker (LNK), and right-hand side (RHS) (illustrated in <FigureRef label="antibiotic-lhs-lnk-rhs" />). Therefore, unlike the other program, where we want to generate arbitrary novel scaffolds, for this target we want to stay close to this precedented pharmacophore. </p>

        <Figure label="antibiotic-lhs-lnk-rhs" caption={<>The overall linear structure of most inhibitors, which take the form of left-hand side (LHS), linker (LNK), and right-hand side (RHS). Note that the example molecule shown is taken from a different publicly-known program and is not related to this target.</>}>
          <img src="/images/blog/synthemol_merck/antibiotic-lhs-lnk-rhs.svg" alt="The overall linear structure of most inhibitors, which take the form of left-hand side (LHS), linker (LNK), and right-hand side (RHS)." />
        </Figure>

        <p>Second, as noted earlier, there isn't a single antibacterial protein in a single species but rather five variants of the protein across five species. Therefore, while the other program only had two objectives (experimental potency and docking score), this program involves a complex six-parameter optimization problem: maximizing estimated potency across each of the five bacterial species while minimizing estimated potency on human hERG.</p>

        <p>Based on preliminary SyntheMol-RL experiments, we determined that SyntheMol-RL using the Enamine REAL Space, which we used for the first program, did not generate molecules with the LHS-LNK-RHS structure that we needed. We therefore designed a custom chemical space. Fortunately, we built SyntheMol-RL in such a way that the RL method is compatible with any combinatorial chemical space (i.e., a chemical space defined by building blocks that can be combined with chemical reactions). We designed a new chemical space with Merck-internal building blocks consisting of 3,098 LHS molecules, 805 LNK molecules, and 7,143 RHS molecules along with two synthetic chemical reactions that can combine them into an LHS-LNK-RHS molecule (with the linker oriented in either of two directions). This gave us a chemical space with a total of over 35 billion molecules, which is comparable in size to the Enamine REAL Space but entirely made up of our custom enumerated LHS-LNK-RHS molecule ideas.</p>

        <p>With the chemical space issue defined, the remaining challenge was the highly multi-parameter nature of drug design for the program. First, as usual, we had to train property predictors for each of our six objectives. We trained one ensemble of 10 Chemprop-RDKit models in a multi-task fashion on all 2.4k molecules with log-transformed experimental potency data, with one prediction head for each of the five bacterial species (<FigureRef label="antibiotic-chemprop-performance" />). We then trained another ensemble of 10 Chemprop-RDKit models on 370k molecules with log-transformed hERG potency data from an internal Merck dataset (<FigureRef label="antibiotic-herg" />).</p>

        <Figure label="antibiotic-chemprop-performance" cols={3} caption={<>Performance of 10 Chemprop-RDKit property predictors trained to predict log-transformed experimental potency across five bacterial species.</>}>
          <img src="/images/blog/synthemol_merck/antibiotic-chemprop-performance-acinetobacter.svg" alt="Performance of 10 Chemprop-RDKit property predictors trained to predict log-transformed experimental potency on A. baumannii." />
          <img src="/images/blog/synthemol_merck/antibiotic-chemprop-performance-escherichia.svg" alt="Performance of 10 Chemprop-RDKit property predictors trained to predict log-transformed experimental potency on E. coli." />
          <img src="/images/blog/synthemol_merck/antibiotic-chemprop-performance-klebsiella.svg" alt="Performance of 10 Chemprop-RDKit property predictors trained to predict log-transformed experimental potency on K. pneumoniae." />
          <img src="/images/blog/synthemol_merck/antibiotic-chemprop-performance-pseudomonas.svg" alt="Performance of 10 Chemprop-RDKit property predictors trained to predict log-transformed experimental potency on P. aeruginosa." />
          <img src="/images/blog/synthemol_merck/antibiotic-chemprop-performance-staphylococcus.svg" alt="Performance of 10 Chemprop-RDKit property predictors trained to predict log-transformed experimental potency on S. aureus." />
        </Figure>

        <Figure label="antibiotic-herg" cols={2} caption={<>(left) Distribution of hERG potency values across an internal set of 370k molecules at Merck. (right) Performance of Chemprop-RDKit property predictors trained to predict log-transformed hERG potency.</>}>
          <img src="/images/blog/synthemol_merck/antibiotic-herg-distribution.svg" alt="Distribution of hERG potency values across an internal set of 370k molecules at Merck." />
          <img src="/images/blog/synthemol_merck/antibiotic-herg-performance.svg" alt="Performance of Chemprop-RDKit property predictors trained to predict log-transformed hERG potency." />
        </Figure>

        <p>At first, we thought that SyntheMol-RL would be able to handle simultaneous optimization of all six properties since it had done well on the two-parameter optimizations in both our academic work and the first program, and five of our objectives seemed to be basically the same since they were all bacterial potency with a shared target. However, optimizing these six properties proved to be much more challenging than we expected. Even though five of the properties are bacterial potency, differences in bacterial biology means that potency can vary dramatically across the species. As you can see in Figure 11, some species like <span style={{ fontStyle: "italic" }}>P. aeruginosa</span> have very few potent molecules compared to others like <span style={{ fontStyle: "italic" }}>S. aureus</span>, making it much harder to generate potent molecules for those species since the property predictor has so few examples to learn from.</p>

        <p>This challenge became clear when we first ran SyntheMol-RL with a six-parameter optimization. Although we defined the same potency success thresholds for all five bacterial species (&lt; 2 µg/mL), SyntheMol-RL found it much harder to generate molecules with sufficiently strong predicted potency against <span style={{ fontStyle: "italic" }}>P. aeruginosa</span> compared to the other species, so the dynamic weighting mechanism put nearly all of the weight on P. aeruginosa potency and almost zero weight on the other four bacterial species, with a small weight for hERG (<FigureRef label="antibiotic-weighting" />).</p>

        <Figure label="antibiotic-weighting" cols={2} caption={<>The success rate (left) and weights (right) of SyntheMol-RL when generating molecules with a six-parameter optimization for five bacterial potency values and one hERG potency value.</>}>
          <img src="/images/blog/synthemol_merck/antibiotic-success.svg" alt="The success rate of SyntheMol-RL when generating molecules with a six-parameter optimization for five bacterial potency values and one hERG potency value." />
          <img src="/images/blog/synthemol_merck/antibiotic-weights.svg" alt="The weights of the six objectives set by SyntheMol-RL when generating molecules with a six-parameter optimization for five bacterial potency values and one hERG potency value." />
        </Figure>

        <p>Rather than spending weeks trying to manually tune the weights and success thresholds, we decided that we would forgo a simultaneous six-parameter optimization and instead opt for five two-parameter optimizations – each of the five bacterial potencies paired with hERG potency. This would make it easier for SyntheMol-RL since it would only have to balance the bacterial and hERG potency objectives for one species at a time, resulting in high quality molecules for each of the five species independently. Then, for each of the five sets of generated molecules, we would make potency predictions for the other four bacterial species to see if any molecules are predicted to be potent against all species simultaneously. Since there is still some shared biology across the species (the positive potency correlations we saw in <FigureRef label="antibiotic-potency" />), it's reasonable to believe that highly potent molecules for one species might be at least somewhat potent across multiple species.</p>

        <p>We took this approach and ran SyntheMol-RL for 10,000 iterations on our custom chemical space five times, each time optimizing for potency against one of the bacterial species along with hERG potency. The generated molecules had significantly improved bacterial potency compared to a random sample of 10,000 Enamine REAL Space molecules with a similar distribution of hERG potencies (<FigureRef label="antibiotic-vs-real" />) and contained many joint hits for bacterial and hERG potency (<FigureRef label="antibiotic-potency-vs-herg" />).</p>

        <Figure label="antibiotic-vs-real" cols={3} caption={<>(all except bottom right) The distribution of predicted log-transformed bacterial potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange). (bottom right) The distribution of predicted log-transformed hERG potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange).</>}>
          <img src="/images/blog/synthemol_merck/antibiotic-vs-real-acinetobacter.svg" alt="The distribution of predicted log-transformed bacterial potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange) for A. baumannii." />
          <img src="/images/blog/synthemol_merck/antibiotic-vs-real-escherichia.svg" alt="The distribution of predicted log-transformed bacterial potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange) for E. coli." />
          <img src="/images/blog/synthemol_merck/antibiotic-vs-real-klebsiella.svg" alt="The distribution of predicted log-transformed bacterial potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange) for K. pneumoniae." />
          <img src="/images/blog/synthemol_merck/antibiotic-vs-real-pseudomonas.svg" alt="The distribution of predicted log-transformed bacterial potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange) for P. aeruginosa." />
          <img src="/images/blog/synthemol_merck/antibiotic-vs-real-staphylococcus.svg" alt="The distribution of predicted log-transformed bacterial potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange) for S. aureus." />
          <img src="/images/blog/synthemol_merck/antibiotic-vs-real-herg.svg" alt="The distribution of predicted log-transformed hERG potency values for molecules generated by SyntheMol-RL (blue) and molecules randomly sampled from the Enamine REAL Space (orange)." />
        </Figure>

        <Figure label="antibiotic-potency-vs-herg" cols={3} caption={<>Distributions of predicted log-transformed bacterial potency and predicted log-transformed hERG potency for molecules generated by SyntheMol-RL for each of the five bacterial species. The lower right quadrant shows the number of molecules that satisfy both objectives simultaneously (predicted experimental potency &lt; 2 µg/mL and predicted hERG potency &gt; 30 nM).</>}>
          <img src="/images/blog/synthemol_merck/antibiotic-potency-vs-herg-acinetobacter.svg" alt="Distributions of predicted log-transformed bacterial potency and predicted log-transformed hERG potency for molecules generated by SyntheMol-RL for A. baumannii." />
          <img src="/images/blog/synthemol_merck/antibiotic-potency-vs-herg-escherichia.svg" alt="Distributions of predicted log-transformed bacterial potency and predicted log-transformed hERG potency for molecules generated by SyntheMol-RL for E. coli." />
          <img src="/images/blog/synthemol_merck/antibiotic-potency-vs-herg-klebsiella.svg" alt="Distributions of predicted log-transformed bacterial potency and predicted log-transformed hERG potency for molecules generated by SyntheMol-RL for K. pneumoniae." />
          <img src="/images/blog/synthemol_merck/antibiotic-potency-vs-herg-pseudomonas.svg" alt="Distributions of predicted log-transformed bacterial potency and predicted log-transformed hERG potency for molecules generated by SyntheMol-RL for P. aeruginosa." />
          <img src="/images/blog/synthemol_merck/antibiotic-potency-vs-herg-staphylococcus.svg" alt="Distributions of predicted log-transformed bacterial potency and predicted log-transformed hERG potency for molecules generated by SyntheMol-RL for S. aureus." />
        </Figure>

        <p>Then, we merged the five sets of generations and filtered the combined 91.4k molecules as follows:</p>

        <ul>
          <li>For each of the five species, predicted experimental potency &gt; 2.1 log units (&lt; 8 µg/mL)</li>
          <li>For each of the five species, predicted experimental potency uncertainty &lt; 0.3 log units</li>
          <li>Predicted hERG potency &lt; 4.5 log units (&gt; 30 µM)</li>
          <li>Predicted hERG potency uncertainty &lt; 0.3 log units</li>
          <li>No PAINS substructures</li>
          <li>Tanimoto similarity to the most similar known potent compound &lt; 0.6 (using Morgan fingerprints with radius 2 and 2048 bits)</li>
        </ul>

        <p>This gave us 274 molecules that passed all the filters. Finally, as an additional layer of <span style={{ fontStyle: "italic" }}>in silico</span> validation, we docked the filtered molecules against the protein crystal structure from <span style={{ fontStyle: "italic" }}>S. aureus</span>. While comprehensive experimental results are still a few months away, we tested a preliminary set of three generated molecules and found two molecules had potency, giving us confidence in our approach.</p>

        <h2>Takeaways</h2>

        <p>Working on the two programs at Merck taught us that while SyntheMol-RL is generally well-suited for real-world small molecule drug discovery, adapting generative AI tools like SyntheMol-RL requires careful thought about the nuances of each individual drug discovery program. From the first program, we learned about the importance of considering chemical diversity in pre-existing experimental training data, which we handled by adapting SyntheMol-RL to perform a multi-parameter optimization across two property predictors: one trained on a narrow set of experimentally validated molecules and one trained on a broad set of in silico docked molecules. From the antibacterial program, we learned about the limits of multi-parameter optimization, particularly when the difficulty of objectives differs drastically, which we handled by breaking the problem down into a series of smaller multi-parameter optimization problems. Notably, across not only both Merck programs but also our academic work at Stanford, we've seen that even when SyntheMol-RL designs molecules with all the desired predicted properties, many generated molecules still fail experimentally due to the inaccuracy of the property predictors. Therefore, it's crucial to continue developing not just generative models but also better molecular property predictors.</p>

        <p>We learned a huge amount about applying generative AI to real-world drug discovery through our collaboration between Stanford and Merck. We highly encourage academic researchers to explore similar collaborations to test the limits of their models and to learn about the broad range of interesting problems that arise when applying generative AI to real-world drug discovery.</p>

        <h2>Acknowledgments</h2>

        <p>We thank our many colleagues at Merck on these two programs for their gracious collaboration, discussion, and advice, including Zach Brill, Chris Bungard, Shuzhi Dong, Donna Hayes, David Hilbert, Tahsin Kellici, Rob Mazzola, Essam Metwally, Helen Mitchell, Lisa Oh, Ron Painter, Izzat Raheem, Brandon Taoka, and Scott Walker.</p>

      </div>
    </FigureProvider>
  );
}

export default SyntheMolMerckPost;
