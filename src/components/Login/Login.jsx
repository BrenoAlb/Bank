    import './Login.css';

const Login = ({ setLogged }) => {

    const handleLogin = (event) => {
        event.preventDefault()
        setLogged(true)
    }

    return (
        <>
            <div className='mainContent'>
                <section className='loginPrincipal'>
                    <img src="./nukenzieBranco.png" alt="" />
                    <h1>Centralize o controle das suas finanças</h1>
                    <p>De forma rápida e segura</p>
                    <button className="loginButton" onClick={handleLogin}>Iniciar</button>
                </section>
                <section>
                    <figure className="kenzieFigure">
                        <img className="kenzieLogin"src="./imageEntry.png" alt="" />
                    </figure>
                </section>
            </div>
        </>
    )
}

export default Login;