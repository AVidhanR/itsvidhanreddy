"use client";
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="m-6 flex items-center justify-center">
      &copy;{currentYear} A Vidhan Reddy
    </footer>
  );
}

export default Footer;
