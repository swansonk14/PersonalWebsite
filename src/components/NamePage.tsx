import React, { Component } from "react";
import "./App.scss";

class NamePage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1 className="nameTitle">Kyle Swanson</h1>
        <img className="selfImage" src="images/kyle_swanson.png"></img>
        <p>I am currently a master's student in mathematical statistics at the University of Cambridge (Trinity College) as part of a two-year Marshall Scholarship in the United Kingdom. Previously, I was at the Massachusetts Institute of Technology, where I obtained a BS in Computer Science and Engineering (Course 6-3) and Mathematics (Course 18) and an MEng in Computer Science and Engineering, supervised by <a href="https://people.csail.mit.edu/regina/">Professor Regina Barzilay</a> in MIT's Computer Science and Artificial Intelligence Laboratory.</p>

        <p>My research interests focus primarily on applications of machine learning to healthcare. As an undergraduate, I spent two years in Professor Barzilay's lab developing convolutional neural networks for breast cancer detection and risk prediction. We specifically focused on predicting breast density, an important risk factor for breast cancer, and developed a <a href="https://pubs.rsna.org/doi/full/10.1148/radiol.2018180694">breast density prediction model</a> with accuracy on par with expert radiologists. We implemented our model in the clinic at Massachusetts General Hospital in January 2018 where it has been aiding radiologists since then.</p>

        <p>During my master's thesis in Professor Barzilay's lab, I worked on building machine learning models for <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.9b00237">molecular property prediction</a>. Accurate prediction of molecular properties, such as toxicity or solubility, can significantly accelerate drug discovery by rapidly identifying promising drug candidates. In collaboration with the Broad Institute of MIT and Harvard, we applied our model to antibiotics and <a href="https://www.cell.com/cell/fulltext/S0092-8674(20)30102-1">discovered a new antibiotic</a>, named <span className="italic">halicin</span>, which has shown activity against a number of bacteria.</p>

        <p>Outside of healthcare, I spent two summers as a research intern at <a href="https://www.asapp.com/">ASAPP</a>, where I worked on problems in natural language processing. In my first summer, I helped develop a <a href="https://www.aclweb.org/anthology/W19-4104/">dialogue suggestion system</a> to enhance the productivity of customer support agents. During my second summer, I applied the mathematics of optimal transport to build interpretable text matching models that can explain how two text documents are related by aligning the sentences of the documents.</p>
      </div>
    );
  }
}

export default NamePage;
