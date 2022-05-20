import {useNavigate} from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Non autorisé</h1>
      <br />
      <p>Vou n'avez pas accés à la page demandée</p>
      <div>
        <button onClick = {goBack}> Retouner </button>
      </div>
      </section>
  )
}

export default Unauthorized