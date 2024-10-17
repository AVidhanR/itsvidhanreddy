import React from "react";

function Footer() {
  return (
    <footer className="m-6 flex items-center justify-center">
      &copy;{new Date().getFullYear()} A Vidhan Reddy
    </footer>
  );
}

export default Footer;
