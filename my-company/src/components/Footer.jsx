import React from "react";

function Footer() {
  return (
    <footer style={{
      background: '#f5f5f5',
      padding: '14px 20px',
      textAlign: 'center',
      borderTop: '1px solid #e0e0e0'
    }}>
      <small>© {new Date().getFullYear()} My Company — All rights reserved.</small>
    </footer>
  );
}

export default Footer;
