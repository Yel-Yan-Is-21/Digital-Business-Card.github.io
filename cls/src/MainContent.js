import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';


function MainContent () {
    return (
        <div className="container main-content">

            <div className="heading text-center">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <h5>laurasmith.website</h5>
            </div>

            <div className="button-group">
                <a href="#" className='email'>
                    <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon>&nbsp;
                    Email
                </a>
                <a href='#' className='linkedin'>
                    <FontAwesomeIcon icon ={faLinkedin}></FontAwesomeIcon>&nbsp;
                    Linkedin
                </a>
            </div>

            <div className='content'>
                <div className='about'>
                    <h2>About</h2>
                    <p>
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div className='interest'>
                    <h2>
                        Interests
                    </h2>
                    <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>
            </div>  

        </div>
    )
}
export default MainContent;
