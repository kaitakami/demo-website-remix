import { Link } from 'remix';

export default function BlogIndex() {
  return (
    <div>
      <h2>Cree este sitio web provisional para poder empezar a subir mis blogs :)</h2>
      Me puedes dar feedback en <a href="https://twitter.com/kaitakami_/">twitter</a>
      <ul>
        <li>
          <Link to="first-post">Crear una startup con 17 años 💻</Link>
        </li>
      </ul>
    </div>
  );
}
