import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  const estilo = { backgroundColor: corSecundaria };
  return (
    <section className="time" style={estilo}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
