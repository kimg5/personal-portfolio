import React from 'react'
import './footer.css'

const Footer = () => {
  const copyRight = 'EGATOR Tutorials. All rights reserved.';
  return (
    <footer>
      <div className="footer__copyright">
        <small>&copy; {copyRight}</small>
      </div>
    </footer>
  )
}

export default Footer