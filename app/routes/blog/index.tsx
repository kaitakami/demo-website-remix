import { Link } from "remix";

export default function BlogIndex() {
  return (
    <div>
      <h2>
        Cree este sitio web provisional para poder empezar a subir mis blogs :)
      </h2>
      Me puedes dar feedback en{" "}
      <a href="https://twitter.com/kaitakami_/" target="_blank">
        twitter
      </a>
      <ul>
        <li>
          <Link to="6">Deje de comer azúcar procesada por un mes</Link>
        </li>
        <li>
          <Link to="5">Los videojuegos nos forman</Link>
        </li>
        <li>
          <Link to="reto-blog">Reto: Escribir un blog diario</Link>
        </li>
        <li>
          <Link to="sistema-de-productividad">Mi sistema de productividad</Link>
        </li>
        <li>
          <Link to="crear-una-startup-con-17">
            Crear una startup con 17 años 💻
          </Link>
        </li>
      </ul>
    </div>
  );
}
