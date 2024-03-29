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
      <br />
      <br />
      <a href="https://kaitakami.com/blog/programacion/">
        Mi blog de programación
      </a>
      <ul>
        <li>
          <Link to="todo-lo-que-tiktok-sabe-de-ti">
            Todo lo que TikTok sabe de ti
          </Link>
        </li>
        <li>
          <Link to="newsletter-teaser">
            Qué aprenderás en mi newsletter
          </Link>
        </li>
        <li>
          <Link to="tiempo-relaciones-sociales">
            La paradoja del tiempo en las relaciones sociales
          </Link>
        </li>
        <li>
          <Link to="costo-de-viajar">El verdadero costo de viajar</Link>
        </li>
        <li>
          <Link to="futuro-de-este-blog">El futuro de este blog</Link>
        </li>
        <li>
          <Link to="7">El infierno de los cursos de programación</Link>
        </li>
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
      <br></br>
      <iframe
        src="https://embeds.beehiiv.com/eb2aa2c1-0717-4026-8fd6-766b64c8a5d1"
        data-test-id="beehiiv-embed"
        width="100%"
        height={320}
        frameBorder={0}
        scrolling="no"
        style={{
          borderRadius: 4,
          border: "2px solid #e5e7eb",
          margin: 0,
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
