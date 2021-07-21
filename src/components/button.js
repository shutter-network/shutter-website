import React from "react";
import PropTypes from "prop-types";

export const ButtonType = {
  BLACK: "black",
  OUTLINED: "outlined",
  WHITE: "white",
};

export function Button({ label, buttonType, href, className = "" }) {
  const bgColor =
    buttonType === ButtonType.BLACK ? "bg-shutter-black" : "bg-white";
  const textColor =
    buttonType === ButtonType.BLACK ? "text-white" : "text-shutter-black";
  const borderColor =
    buttonType === ButtonType.OUTLINED ? "border-shutter-black border-4" : "";

  return (
    <a
      className={`
        rounded-full flex-1 py-6 text-3xl uppercase
        tracking-widest flex justify-center items-center hover:cursor-pointer
        ${bgColor} ${textColor} ${borderColor} ${className}
      `}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};
