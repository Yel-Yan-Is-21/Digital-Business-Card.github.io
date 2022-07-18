import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubSquare, faTwitterSquare, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        <footer className='container footer'>
            <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </footer>
    )
}
export default Footer;