import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

const Time = ({ nome, corPrimaria, corSecundaria }) => {
  const estilo = { backgroundColor: corSecundaria };
  return (
    <section className="time" style={estilo}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <Colaborador />
    </section>
  );
};

export default Time;
