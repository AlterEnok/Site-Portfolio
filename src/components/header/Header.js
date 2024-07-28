import './style.css';
const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>AlterEno</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>may the force be with you.</p>
                </div>
                <a href="/CV.pdf" className="btn" download>Download CV</a>
            </div>
        </header>
    );
}

export default Header;
