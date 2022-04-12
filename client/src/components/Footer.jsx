import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-center">
        <small>&copy; {new Date().getFullYear()}</small>
      </p>
    </div>
  );
};

export default Footer;
