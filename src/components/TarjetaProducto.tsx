import { useState } from "react";
import "./TarjetaProducto.css";

interface Reseña {
  usuario: string;
  texto: string;
  fecha: string;
}

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  reseñas: Reseña[];
}

interface Props {
  producto: Producto;
}

function TarjetaProducto({ producto }: Props) {
  const [agregado, setAgregado] = useState(false);
  const [verReseñas, setVerReseñas] = useState(false);

  return (
    <div className="tarjeta">
      <img
        className="tarjeta-imagen"
        src={producto.imagen}
        alt={producto.nombre}
      />
      <div className="tarjeta-body">
        <h2 className="tarjeta-nombre">{producto.nombre}</h2>
        <p className="tarjeta-descripcion">{producto.descripcion}</p>
        <p className="tarjeta-precio">${producto.precio.toFixed(2)}</p>
      </div>
      <div className="tarjeta-acciones">
        <button
          className="btn-carrito"
          onClick={() => setAgregado(true)}
          disabled={agregado}
        >
          {agregado ? "Agregado ✅" : "Agregar al Carrito"}
        </button>
        <button
          className="btn-reseñas"
          onClick={() => setVerReseñas(!verReseñas)}
        >
          {verReseñas ? "Ocultar reseñas ▲" : "Ver reseñas ▼"}
          <span className="badge">{producto.reseñas.length}</span>
        </button>
      </div>
      {verReseñas && (
        <div className="reseñas-lista">
          {producto.reseñas.length === 0 ? (
            <p className="sin-reseñas">Sin reseñas aún.</p>
          ) : (
            producto.reseñas.map((r, index) => (
              <div key={index} className="reseña-item">
                <p className="reseña-usuario">{r.usuario}</p>
                <p className="reseña-texto">{r.texto}</p>
                <p className="reseña-fecha">{r.fecha}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default TarjetaProducto;