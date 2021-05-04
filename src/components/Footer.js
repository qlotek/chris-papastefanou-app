import React from 'react';

const Footer = () => {
  return (
    <footer id="main-footer">
      <div class="footer-content container">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div class="social">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
