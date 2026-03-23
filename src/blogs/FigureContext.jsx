import React, { createContext, useContext, useRef } from "react";

const FigureContext = createContext(null);

export function FigureProvider({ children }) {
  const labelsRef = useRef(new Map());
  const counterRef = useRef(0);

  const register = (label) => {
    if (!labelsRef.current.has(label)) {
      counterRef.current += 1;
      labelsRef.current.set(label, counterRef.current);
    }
    return labelsRef.current.get(label);
  };

  const getNumber = (label) => labelsRef.current.get(label);

  return (
    <FigureContext.Provider value={{ register, getNumber }}>
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
