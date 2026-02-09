import '../assets/estilos/App.css';

const Boton = ({ texto, estilo, className=""}: any) => {
  
  return (
    <button className={`btn btn-${estilo} ${className}`}>
      {texto}
    </button>
  );
};

export default Boton;