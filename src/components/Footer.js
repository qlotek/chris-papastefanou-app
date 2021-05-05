import React from 'react';

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div className="social"></div>
      </div>
    </footer>
  );
};

export default Footer;
