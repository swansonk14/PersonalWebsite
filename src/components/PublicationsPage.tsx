import React, { Component } from "react";
import "./App.scss";

class PublicationsPage extends Component {

  public render() {
    return (
      <div className="Page">
        <h2 className="publicationTitle"><a href="https://pubs.rsc.org/en/content/articlelanding/2020/sm/c9sm01903k#!divAbstract"> Deep learning for automated classification and characterization of amorphous materials</a></h2>
        <p className="authorsText"> Kirk Swanson, Shubhendu Trivedi, Joshua Lequieu, <span className="selfAuthor">Kyle Swanson</span>, and Risi Kondor.</p>
        <p className="journalText"> <span className="journalName">Soft Matter</span>, 2019.</p>

        <h2 className="publicationTitle"><a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.9b00237"> Analyzing Learned Molecular Representations for Property Prediction</a></h2>
        <p className="authorsText"> Kevin Yang, <span className="selfAuthor">Kyle Swanson</span>, Wengong Jin, Connor Coley, Philipp Eiden, Hua Gao, Angel Guzman-Perez, Timothy Hopper, Brian Kelley, Miriam Mathea, Andrew Palmer, Volker Settels, Tommi Jaakkola, Klavs Jensen, and Regina Barzilay.</p>
        <p className="journalText"> <span className="journalName">Journal of Chemical Information and Modeling</span>, 2019.</p>
        <div className="suppInfo">
          <p>Code: <a href="https://github.com/swansonk14/chemprop">github.com/swansonk14/chemprop</a></p>
          <p>Demo: <a href="http://chemprop.csail.mit.edu">chemprop.csail.mit.edu</a></p>
        </div>

        <h2 className="publicationTitle"><a href="https://www.aclweb.org/anthology/W19-4104/"> Building a Production Model for Retrieval-Based Chatbots</a></h2>
        <p className="authorsText"> <span className="selfAuthor">Kyle Swanson</span>, Lili Yu, Christopher Fox, Jeremy Wohlwend, and Tao Lei.</p>
        <p className="journalText"> <span className="journalName">Proceedings of the First Workshop on NLP for Conversational AI at the 57th Annual Meeting of the Association for Computational Linguistics</span>, 2019.</p>

        <h2 className="publicationTitle"><a href="https://pubs.rsna.org/doi/full/10.1148/radiol.2018180694"> Mammographic Breast Density Assessment Using Deep Learning: Clinical Implementation</a></h2>
        <p className="authorsText"> Constance Lehman, Adam Yala, Tal Schuster, Brian Dontchos, Manisha Bahl, <span className="selfAuthor">Kyle Swanson</span>, and Regina Barzilay.</p>
        <p className="journalText"> <span className="journalName">Radiology</span>, 2018.</p>
      </div>
    );
  }
}

export default PublicationsPage;
