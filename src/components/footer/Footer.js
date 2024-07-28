import './style.css';

import tg from './../../img/icons/tg.svg';
import instagram from './../../img/icons/instagram.svg';
import github from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item social__item-tg"><a href="https://t.me/Napoleon_1109"><img src={tg} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/alter__ker/"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/AlterEnok"><img src={github} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/edem-kestan-17875527a/"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 AlterEno</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;