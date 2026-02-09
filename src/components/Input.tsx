import '../App.css';

const Input = ({ label, tipo, placeholder }: any) => {
  return (
    <div className="contenedor-input">
      <label className="input-label">{label}</label>
      <input className="input-control" type={tipo} placeholder={placeholder} />
    </div>
  );
};

export default Input;