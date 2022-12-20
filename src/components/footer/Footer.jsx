import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Gabriel</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

            </ul>

            <div className="footer__social">
            <a href="https://github.com/gabo8191" className="footer__social-link" target={"_blank"}>
            <i class="bx bxl-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/gabodev8191/" className="footer__social-link" target={"_blank"}>
            <i class="bx bxl-linkedin"></i>
        </a>

            </div>

            <span className='footer__copy'>&#169; Gabriel, All rights reserverd</span>
        </div>
    </footer>
  )
}

export default Footer