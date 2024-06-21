import "./Colaborador.css";

const Colaborador = (props) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src="https://github.com/GabrielAlerrandro.png" alt="" />
      </div>
      <div className="rodape">
        <h4>Nome</h4>
        <h5>Cargo</h5>
      </div>
    </div>
  );
};

export default Colaborador;
