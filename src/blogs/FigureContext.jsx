import React, { createContext, useContext, useRef } from "react";

const FigureContext = createContext(null);

export function FigureProvider({ children }) {
  const labelsRef = useRef(new Map());
  const counterRef = useRef(0);
  const tableLabelsRef = useRef(new Map());
  const tableCounterRef = useRef(0);

  const register = (label) => {
    if (!labelsRef.current.has(label)) {
      counterRef.current += 1;
      labelsRef.current.set(label, counterRef.current);
    }
    return labelsRef.current.get(label);
  };

  const getNumber = (label) => labelsRef.current.get(label);

  const registerTable = (label) => {
    if (!tableLabelsRef.current.has(label)) {
      tableCounterRef.current += 1;
      tableLabelsRef.current.set(label, tableCounterRef.current);
    }
    return tableLabelsRef.current.get(label);
  };

  const getTableNumber = (label) => tableLabelsRef.current.get(label);

  return (
    <FigureContext.Provider value={{ register, getNumber, registerTable, getTableNumber }}>
      {children}
    </FigureContext.Provider>
  );
}

export function Figure({ label, caption, cols, children }) {
  const { register } = useContext(FigureContext);
  const number = register(label);

  const content = cols ? (
    <div
      className="figure-grid"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {children}
    </div>
  ) : (
    children
  );

  return (
    <figure id={`fig-${label}`}>
      {content}
      <figcaption>
        <span className="figure-label">Figure {number}:</span> {caption}
      </figcaption>
    </figure>
  );
}

export function FigureRef({ label }) {
  const { register } = useContext(FigureContext);
  const number = register(label);

  return (
    <a href={`#fig-${label}`} className="figure-ref">
      Figure {number}
    </a>
  );
}

export function Table({ label, caption, children }) {
  const { registerTable } = useContext(FigureContext);
  const number = registerTable(label);

  return (
    <div id={`tbl-${label}`} className="table-container">
      {children}
      <p className="table-caption">
        <span className="table-label">Table {number}:</span> {caption}
      </p>
    </div>
  );
}

export function TableRef({ label }) {
  const { registerTable } = useContext(FigureContext);
  const number = registerTable(label);

  return (
    <a href={`#tbl-${label}`} className="table-ref">
      Table {number}
    </a>
  );
}
