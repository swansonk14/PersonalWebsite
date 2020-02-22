import React, { Component } from "react";
import "./App.scss";

class NamePage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1 className="nameTitle">Kyle Swanson</h1>
        <img className="selfImage" src="images/kyle_swanson.png"></img>
        <p>I am currently a master's student in mathematical statitistics at the University of Cambridge (Trinity College) as part of a two-year Marshall Scholarship in the United Kingdom. Previously I was at the Massachusetts Institute of Technology, where I obtained a BS in Computer Science and Engineering (Course 6-3) and Mathematics (Course 18) and an MEng in Computer Science and Engineering, supervised by Professor Regina Barzilay in MIT's Computer Science and Artificial Intelligence Laboratory.</p>

        <p>My research interests focus primarily on applications of machine learning to healthcare. As an undergraduate, I spent two years in Professor Barzilay's lab developing convolutional neural networks for breast cancer detection and risk prediction. We specifically focused on breast density, an important risk factor for breast cancer, and developed a breast density prediction model with accuracy on par with expert radiologists. We implemented our model in the clinic at Massachusetts General Hospital in January 2018, and it has been aiding radiologists since then.</p>

        <p>During my master's thesis in Professor Barzilay's lab, I worked on building machine learning models for molecular property prediction. Accurate prediction of molecular properties, such as toxicity or solubility, can significantly accelerate drug discovery by rapidly identifying promising drug candidates. In collaboration with the Broad Institute of MIT and Harvard, we applied our model to antibiotics and discovered a new antibiotic, named <span className="italic">halicin</span>, which has shown activity against a number of dangerous bacteria.</p>

        <p>Outside of healthcare, I have spent two summers as a research intern at ASAPP, where I have worked on problems in natural language processing. The first summer, I helped develop a dialogue suggestion system in the context of customer support chat conversations. During my second summer, I applied the mathematics of optimal transport to build interpretable text matching models that can explain how two text documents are related by aligning the sentences of the documents.</p>
      </div>
    );
  }
}

export default NamePage;
