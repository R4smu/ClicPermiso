import '../App.css';

export const ComponenteButton = ( {texto} ) => {
  return (
    <>
      <div className="contenedor-boton">
        <button className="boton-seccion">{ texto }</button>
      </div>
    </>
  );
};