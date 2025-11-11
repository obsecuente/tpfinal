import React from "react";
import "../../style/footer.css"; // Creá este archivo después

function Footer({
  texto = "Todos los derechos reservados a Universidad Tecnológica Nacional ©",
}) {
  return (
    <footer className="footer">
      <p className="footerP">{texto}</p>
    </footer>
  );
}

export default Footer;
