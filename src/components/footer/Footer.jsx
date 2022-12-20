import React from "react";
import "./footer.css";

const Footer = () => {
  const copyRight = "2022 Team Constructor";
  return (
    <footer>
      <div className="footer__copyright">
        <small>&copy; {copyRight}</small>
      </div>
    </footer>
  );
};

export default Footer;
