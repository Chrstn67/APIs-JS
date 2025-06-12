"use client";

import { useState, useRef, useEffect } from "react";
import ApiCodeExamples from "./ApiCodeExamples";

function ResizeObserverDemo() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      }
    });

    if (targetRef.current) {
      resizeObserver.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        resizeObserver.unobserve(targetRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>ResizeObserver Demo</h1>
      <div
        ref={targetRef}
        style={{
          width: "50%",
          height: "200px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          resize: "both",
          overflow: "auto",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "black" }}>
          Resize this box to see the width and height change.
        </p>
      </div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      <ApiCodeExamples apiName="ResizeObserver" />
    </div>
  );
}

export default ResizeObserverDemo;
