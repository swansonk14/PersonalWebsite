import React, { Component } from "react";
import { Document, Page } from 'react-pdf';
import "./App.scss";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class CVPage extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }: {numPages: number}) => {
    this.setState({ numPages });
  }

  public render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file="pdfs/cv.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default CVPage;
