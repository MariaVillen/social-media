
import {Link} from "react-router-dom";


function NotFound() {
  return (
    <main>
        <h2>OUPS!</h2>
        <p>La page que vous recherchez semble introuvable. </p>
        <Link to="/">Aller à la page d'accueil</Link>
    </main>
  )
}

export default NotFound