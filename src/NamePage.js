import React, { Component } from "react";
import "./App.css";

class NamePage extends Component {

  render() {
    return (
      <div className="Page">
        <h1 className="nameTitle">Kyle Swanson</h1>
        <img className="selfImage" src="images/kyle_swanson.png" alt="Kyle Swanson"></img>
        <p>I am currently a PhD student in computer science at Stanford University advised by <a href="https://www.james-zou.com/">Professor James Zou</a>, and I am studying as a <a href="https://knight-hennessy.stanford.edu/">Knight-Hennessy Scholar</a> and a <a href="https://biox.stanford.edu/research/phd-fellows">Stanford Bio-X Fellow</a>. I previously spent two years in the United Kingdom on a <a href="https://www.marshallscholarship.org/">Marshall Scholarship</a> during which I completed an MSc in biotechnology at Imperial College London and an MASt in mathematical statistics at the University of Cambridge (Trinity College). Before that, I was at the Massachusetts Institute of Technology, where I obtained a BS in Computer Science and Engineering (Course 6-3) and Mathematics (Course 18) and an MEng in Computer Science and Engineering, supervised by <a href="https://www.regina.csail.mit.edu/">Professor Regina Barzilay</a> in MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL).</p>

        <p>My research interests focus primarily on applications of machine learning to drug discovery and healthcare. As an undergraduate, I spent two years in Professor Barzilay's lab developing convolutional neural networks for breast cancer detection and risk prediction. We specifically focused on predicting breast density, an important risk factor for breast cancer, and developed a <a href="https://pubs.rsna.org/doi/full/10.1148/radiol.2018180694">breast density prediction model</a> with accuracy on par with expert radiologists. In January of 2018, we implemented our model in the clinic at Massachusetts General Hospital, where it continues to aid radiologists.</p>

        <p>During my master's thesis in Professor Barzilay's lab, I worked on building machine learning models for <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.9b00237">molecular property prediction</a>. Accurate prediction of molecular properties, such as toxicity or solubility, can significantly accelerate drug discovery by rapidly identifying promising drug candidates. In collaboration with the Broad Institute of MIT and Harvard, we applied our model to antibiotics and <a href="https://www.cell.com/cell/fulltext/S0092-8674(20)30102-1">discovered a new antibiotic</a>, which we named <span className="italic">halicin</span>, that has shown activity against a number of bacteria.</p>

        <p>Currently in my PhD, I have continued to develop machine learning models for drug discovery. I built a generative model for synthesizable small molecule design named <a href="https://www.nature.com/articles/s42256-024-00809-7">SyntheMol</a>, which I applied to antibiotic discovery. I also continued my work on molecular property prediction, developing <a href="https://academic.oup.com/bioinformatics/article/40/7/btae416/7698030">ADMET-AI</a> to predict drug-like properties of small molecules. More recently, I have been developing large language model agents for drug discovery in the form of the <a href="https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1">Virtual Lab</a>, which I applied to nanobody design for recent variants of SARS-CoV-2.</p>

        <p>Outside of biomedicine, I spent two summers as a research intern at <a href="https://www.asapp.com/">ASAPP</a>, where I worked on problems in natural language processing. In my first summer, I helped develop a <a href="https://www.aclweb.org/anthology/W19-4104/">dialogue suggestion system</a> to enhance the productivity of customer support agents. During my second summer, I applied the mathematics of optimal transport to build <a href="https://www.aclweb.org/anthology/2020.acl-main.496/">interpretable text matching models</a> that can explain how two text documents are related by aligning the sentences of the documents.</p>
      </div>
    );
  }
}

export default NamePage;
