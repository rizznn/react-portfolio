import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


function Footer() {

    // const icons = [
    //     {
    //         name: "faGithub",
    //         link: "https://github.com/rizznn/"
    //     },
    //     {
    //         name: "faLinkedin",
    //         link: "https://www.linkedin.com/in/rizzel-nolasco-350a24126/"
    //     },
    //     {
    //         name: "faStackOverflow",
    //         link: "https://stackoverflow.com/users/15539132/rizzel"
    //     }
    // ]

    return (
    <footer className="footer-background">
        <div className="row">
            <div className="col-lg-8 mx-auto text-center">                            
                <a href="https://github.com/rizznn/" key='Github'
                target="_blank" className="render-icons" rel="noopener noreferrer"> 
                <FontAwesomeIcon icon={faGithub}/></a>

                <a href="https://www.linkedin.com/in/rizzel-nolasco-350a24126/" key='LinkedIn'
                target="_blank" className="render-icons" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin}/></a>

                <a href="https://stackoverflow.com/users/15539132/rizzel" key='StackOverflow'
                target="_blank" className="render-icons" rel="noopener noreferrer"> <FontAwesomeIcon icon={faStackOverflow}/></a>
            
            </div>
        </div>
    </footer>
    );
}

export default Footer;