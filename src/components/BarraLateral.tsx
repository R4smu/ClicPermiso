import '../App.css';
import logo from '../assets/albarregas.jpg'; 

const BarraLateral = () => {
  return (
    <aside className="barra-lateral">
      <div className="barra-lateral-logo">
        <img src={logo} />
      </div>
      <nav>
        <ul className="barra-lateral-secciones">
          <li className="seccion actual">Sol. día diurno</li>
          <li className="seccion">Sol. día vespertino</li>
          <li className="seccion">Mi Perfil</li>
          <li className="seccion">Mis días Solicitados</li>
          <li className="seccion">Mis ausencias</li>
        </ul>
      </nav>
    </aside>
  );
};

export default BarraLateral;