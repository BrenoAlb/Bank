import './style.css';

const Header = ({ setLogged }) => {

    const handleLogout = () => {
        setLogged(false)
    }


    return (
        <header className="headerMain">
            <img className="headerLogo" src="../../nukenzie.png" alt="" />
            <button className="headerButton" onClick={handleLogout}>Início</button>
        </header>
    );
};

export default Header;