import React from "react";
import PropTypes from "prop-types";

export const ButtonType = {
  BLACK: "black",
  OUTLINED: "outlined",
  WHITE: "white",
};

export function DAOButton({ label, buttonType, href, className = "" }) {
  const bgColor =
    buttonType === ButtonType.BLACK ? "bg-shutter-green" : "bg-white";
  const textColor =
    buttonType === ButtonType.BLACK ? "text-shutter-new" : "text-shutter-black";
  const borderColor =
    buttonType === ButtonType.OUTLINED ? "border-shutter-black border-4" : "";

  return (
    <a
      className={`
        rounded-full flex-1 py-6 text-xl md:text-3xl uppercase font-medium
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

DAOButton.propTypes = {
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};
