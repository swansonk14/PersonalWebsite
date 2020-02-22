import React, { Component } from "react";
import "./App.scss";

class PublicationsPage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1>Publications</h1>

        <h2 className="publicationTitle"><a href="https://www.cell.com/cell/fulltext/S0092-8674(20)30102-1"> A Deep Learning Approach to Antibiotic Discovery</a></h2>
        <p className="authorsText"> Jonathan M. Stokes, Kevin Yang<sup>*</sup>, <span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Wengong Jin, Andres Cubillos-Ruiz, Nina M. Donghia, Craig R. MacNair, Shawn French, Lindsey A. Carfrae, Zohar Bloom-Ackerman, Victoria M. Tran, Anush Chiappino-Pepe, Ahmed H. Badran, Ian W. Andrews, Emma J. Chory, George M. Church, Eric D. Brown, Tommi S. Jaakkola, Regina Barzilay, and James J. Collins.</p>
        <p className="journalText"> <span className="journalName">Cell</span>, 2020.</p>
        <div className="suppInfo">
          <h4>Supporting Information</h4>
          <p>Code: <a href="https://github.com/chemprop/chemprop">github.com/chemprop/chemprop</a></p>
          <p>Demo: <a href="http://chemprop.csail.mit.edu">chemprop.csail.mit.edu</a></p>
          <br></br>
          <h4>News</h4>
          <p><a href="https://www.nature.com/articles/d41586-020-00018-3">Powerful antibiotics discovered using AI</a>, Nature News.</p>
          <p><a href="https://www.theguardian.com/society/2020/feb/20/antibiotic-that-kills-drug-resistant-bacteria-discovered-through-ai">Powerful antibiotic discovered using machine learning for first time</a>, The Guardian.</p>
          <p><a href="http://news.mit.edu/2020/artificial-intelligence-identifies-new-antibiotic-0220">Artificial intelligence yields new antibiotic</a>, MIT News.</p>
        </div>

        <h2 className="publicationTitle"><a href="https://pubs.rsc.org/en/content/articlelanding/2020/sm/c9sm01903k#!divAbstract"> Deep learning for automated classification and characterization of amorphous materials</a></h2>
        <p className="authorsText"> Kirk Swanson, Shubhendu Trivedi, Joshua Lequieu, <span className="selfAuthor">Kyle Swanson</span>, and Risi Kondor.</p>
        <p className="journalText"> <span className="journalName">Soft Matter</span>, 2019.</p>

        <h2 className="publicationTitle"><a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.9b00237"> Analyzing Learned Molecular Representations for Property Prediction</a></h2>
        <p className="authorsText"> Kevin Yang<sup>*</sup>, <span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Wengong Jin, Connor Coley, Philipp Eiden, Hua Gao, Angel Guzman-Perez, Timothy Hopper, Brian Kelley, Miriam Mathea, Andrew Palmer, Volker Settels, Tommi Jaakkola, Klavs Jensen, and Regina Barzilay.</p>
        <p className="journalText"> <span className="journalName">Journal of Chemical Information and Modeling</span>, 2019.</p>
        <div className="suppInfo">
          <h4>Supporting Information</h4>
          <p>Code: <a href="https://github.com/chemprop/chemprop">github.com/chemprop/chemprop</a></p>
          <p>Demo: <a href="http://chemprop.csail.mit.edu">chemprop.csail.mit.edu</a></p>
        </div>

        <h2 className="publicationTitle"><a href="https://www.aclweb.org/anthology/W19-4104/"> Building a Production Model for Retrieval-Based Chatbots</a></h2>
        <p className="authorsText"> <span className="selfAuthor">Kyle Swanson</span>, Lili Yu, Christopher Fox, Jeremy Wohlwend, and Tao Lei.</p>
        <p className="journalText"> <span className="journalName">Proceedings of the First Workshop on NLP for Conversational AI at the 57th Annual Meeting of the Association for Computational Linguistics</span>, 2019.</p>

        <h2 className="publicationTitle"><a href="https://pubs.rsna.org/doi/full/10.1148/radiol.2018180694"> Mammographic Breast Density Assessment Using Deep Learning: Clinical Implementation</a></h2>
        <p className="authorsText"> Constance Lehman, Adam Yala, Tal Schuster, Brian Dontchos, Manisha Bahl, <span className="selfAuthor">Kyle Swanson</span>, and Regina Barzilay.</p>
        <p className="journalText"> <span className="journalName">Radiology</span>, 2018.</p>
        <div className="suppInfo">
          <h4>News</h4>
          <p><a href="http://news.mit.edu/2018/AI-identifies-dense-tissue-breast-cancer-mammograms-1016">Automated system identifies dense tissue, a risk factor for breast cancer, in mammograms</a>, MIT News.</p>
        </div>

        <br></br>
        <p className="footnote"><sup>*</sup>Denotes equal contribution.</p>
      </div>
    );
  }
}

export default PublicationsPage;
