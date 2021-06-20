import {
  Link
} from "react-router-dom";

const Footer = props => {
  return (
    <footer {...props}>

      <div className="container">
        <div className="row">
          <div className="col">
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/ayudar-un-amigo">Ayudar un amigo</Link>
            <Link className="footer-link" to="/ayudar">Pet home</Link>
          </div>
          <div className="col">
          <Link className="footer-link" to="/registro">Registro</Link>
            <Link className="footer-link" to="/login">Login</Link>
            <Link className="footer-link" to="/perfil">Perfil</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;