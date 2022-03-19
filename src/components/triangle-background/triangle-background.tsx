import React, { useRef, useEffect } from "react";
import Triangulr from "triangulr";
import { ITriangleBackgroundProps } from "./triangle-background.types";

export const TriangleBackground = ({ children }: ITriangleBackgroundProps) => {
  var triangleContainer: { current: any } = { current: null };
  var colorRender = function (path: any) {
    var random = 32;
    var ratio = (path.x + path.y) / (path.cols + path.lines);
    var code = Math.floor(
      255 - ratio * (255 - random) - Math.random() * random
    ).toString(16);

    return "#" + code + "1092";
  };
  useEffect(() => {
    var svg = new Triangulr(
      window.innerWidth,
      window.innerHeight * 1.2,
      100,
      50,
      colorRender
    );
    triangleContainer.current.appendChild(svg);
  }, []);
  return (
    <div
      ref={triangleContainer}
      className="triangleBackground"
      style={{ background: `linear-gradient(90deg, #C71092 0%, #4A1092 100%)` }}
    >
      <div className="shit">{children}</div>
    </div>
  );
};
