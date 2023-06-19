import React from "react";
import { IconLibrary } from "../constant/iconLibrary";

const Icon = ({ name, size, color, className, ...rest }) => {
  const { viewBox, path } = IconLibrary[name];
  let _size;
  switch (size) {
    case "xxs":
      _size = "8px";
      break;
    case "xs":
      _size = "12px";
      break;
    case "sm":
      _size = "18px";
      break;
    case "md":
      _size = "24px";
      break;
    case "lg":
      _size = "32px";
      break;
    case "xl":
      _size = "48px";
      break;
    case "2xl":
      _size = "64px";
      break;
    case "3xl":
      _size = "96px";
      break;
    default:
      _size = size || "24px";
  }
  return (
    <div
      style={{ width: _size, height: _size }}
      className={`inline-block ${className}`}
      {...rest}
    >
      <svg
        style={{ width: "100%", height: "100%" }}
        viewBox={viewBox}
        aria-label={name}
        fill="currentColor"
        dangerouslySetInnerHTML={{ __html: path }}
      ></svg>
    </div>
  );
};

export default Icon;
