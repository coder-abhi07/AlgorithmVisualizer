import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();

        return (
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className='flex-wrap' style={{ textAlign: "center" }}>
                    <a 
                        href="https://www.facebook.com/profile.php?id=100028091352527&sk=grid" 
                        className="m-2 social-icon" 
                        target = "_blank"
                        aria-label="Follow Abhishek Kumar on Facebook">
                        <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" />
                    </a>
                    <a 
                        href="https://www.instagram.com/this_isabhi07" 
                        className="m-2 social-icon" 
                        target = "_blank"
                        aria-label="Follow Abhishek Kumar on Instagram">
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" />
                    </a>
                    <a 
                        href="https://twitter.com/coder_abhi07" 
                        className="m-2 social-icon" 
                        target = "_blank"
                        aria-label="Follow Abhishek Kumar on Twitter">
                        <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/abhishek-kumar-573418164/" 
                        className="m-2 social-icon" 
                        target = "_blank"
                        aria-label="Follow Abhishek Kumar on LinkedIn">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
    
                <div className="footer-copyright text-center py-3">
                    © {currentYear} Abhishek Kumar
                </div>
    
                <style jsx>{`
                    .social-icon img {
                        width: 25px;
                        height: 25px;
                        margin: 10px 0px;
                        transition: transform 0.2s, filter 0.2s;
                    }
    
                    .social-icon:hover img {
                        transform: scale(1.2);
                        filter: brightness(0.8);
                    }
                `}</style>
            </footer>
        );
    }
    
}

export default Footer;