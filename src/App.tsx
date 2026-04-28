import productos from "./data/productos.json";
import TarjetaProducto from "./components/TarjetaProducto";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Catálogo de Productos</h1>
        <p>{productos.length} productos disponibles</p>
      </header>
      <main className="catalogo-grid">
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </main>
    </div>
  );
}

export default App;