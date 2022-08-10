
import { Link } from "remix";

export default function BlogIndex() {
  return (
    <div>
      <h2>
        Este es el blog en el que hablo de código! :)
      </h2>
      Me puedes dar feedback en{" "}
      <a href="https://twitter.com/kaitakami_/" target="_blank">
        twitter
      </a>
      <ul>
        <li>
            Blog en construcción
        </li>
        <li>
          <Link to="como-estoy-aprendiendo-a-programar">
            Cómo estoy aprendiendo a programar
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