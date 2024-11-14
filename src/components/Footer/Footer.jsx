import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <section className="footer-section" id="contact">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="quote">
                        <h3>The Trinity <br></br> Centre</h3>
                        <p>24 Cambridge Science Park, Milton Road, Cambridge, CB4 0FN, UK</p>
                    </div>
                    <div className="footer-info">
                        <h4>Conference Enquiries</h4>
                        <p>01223 481 361</p>
                        <p>bookings@thetrinitycentre.uk.com</p>
                    </div>
                    <div className="footer-info">
                        <h4>Restaurant Enquiries</h4>
                        <p>01223 481 361</p>
                        <p>restaurant@thetrinitycentre.uk.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social-icons">
                        <a href="https://www.facebook.com/Trinity-Centre-Cambridge-888286111220729/" rel="noopener noreferrer" target="_blank" className='social-icon'><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/company-beta/11092100/" rel="noopener noreferrer" target="_blank" className='social-icon'><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/trinitycentrecambridge?igsh=aWYyaTBlNzB1eHJw" rel="noopener noreferrer" target="_blank" className='social-icon'><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
