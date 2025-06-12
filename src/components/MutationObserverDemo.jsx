"use client";

import { useState, useEffect, useRef } from "react";
import ApiCodeExamples from "./ApiCodeExamples";

function MutationObserverDemo() {
  const [mutationCount, setMutationCount] = useState(0);
  const targetNode = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      setMutationCount((prevCount) => prevCount + mutationsList.length);
    });

    const config = {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    };

    if (targetNode.current) {
      observer.observe(targetNode.current, config);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const addElement = () => {
    const newElement = document.createElement("p");
    newElement.textContent = "New Paragraph";
    targetNode.current.appendChild(newElement);
  };

  const changeAttribute = () => {
    if (targetNode.current) {
      targetNode.current.setAttribute("data-test", Math.random());
    }
  };

  const changeText = () => {
    if (targetNode.current) {
      if (targetNode.current.firstChild) {
        targetNode.current.firstChild.textContent = `Updated Text ${Math.random()}`;
      } else {
        const newTextNode = document.createTextNode(
          `Initial Text ${Math.random()}`
        );
        targetNode.current.appendChild(newTextNode);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MutationObserver Demo</h1>
      <p>Mutations Observed: {mutationCount}</p>

      <div
        ref={targetNode}
        style={{
          border: "1px solid black",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <p>Initial Text</p>
      </div>

      <button onClick={addElement} style={{ margin: "5px" }} className="btn">
        Add Element
      </button>
      <button
        onClick={changeAttribute}
        style={{ margin: "5px" }}
        className="btn"
      >
        Change Attribute
      </button>
      <button onClick={changeText} style={{ margin: "5px" }} className="btn">
        Change Text
      </button>

      <ApiCodeExamples apiName="MutationObserver" />
    </div>
  );
}

export default MutationObserverDemo;
