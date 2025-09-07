import { Link } from "react-router-dom";
import "./NotFound.css"; // Import the CSS file for styling
function NotFound() {
  return (
    <div className="not-found">
      <svg
        width="380px"
        height="500px"
        viewBox="0 0 837 1045"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            id="Path-1"
            d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
            stroke="#000080"
            strokeWidth="6"
          />
          <text
            x="353"
            y="350"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="40"
            fill="black"
            className="text-404"
          >
            404
          </text>
          <path
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
            stroke="#e60000"
            strokeWidth="6"
          />
          <path
            d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
            stroke="#e60000"
            strokeWidth="6"
          />
          <path
            d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
            stroke="#1F1F1F"
            strokeWidth="6"
          />
          <path
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
            stroke="#007bff"
            strokeWidth="6"
          />
        </g>
      </svg>

      <div className="message-box">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <div className="buttons-con">
          <div className="action-link-wrap">
            <button
              className="link-button link-back-button"
              onClick={() => window.history.back()}
            >
              Volver atras
            </button>

            <Link to={"/"} className="link-button">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
