import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-titulo">
        <h2>I.E.S Albarregas</h2>
      </div>  
    
      <div className="header-usuario">
        <span>Hola, Lucas</span>
        <button className="btn-logout">Cerrar sesión</button>
      </div>
    </header>
  );
};

export default Header;