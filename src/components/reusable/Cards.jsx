import React from "react";
import "../../style/card.css";

function Card({ imagen, titulo, descripcion, grande }) {
  return (
    <div className={grande ? "carrerasItemGrande" : "carrerasItem"}>
      <img className="carrerasImg" src={imagen} alt={titulo} />
      <div className="overlay">
        <span>{titulo}</span>
      </div>
    </div>
  );
}

export default Card;