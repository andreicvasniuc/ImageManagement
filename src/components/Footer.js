import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                  <ul className="list-inline mb-2">
                      <li className="list-inline-item">
                        <Link to="/">Upload</Link>
                      </li>
                      <li className="list-inline-item">⋅</li>
                      <li className="list-inline-item">
                        <Link to="/resize">Resize</Link>
                      </li>
                  </ul>
                  <p className="text-muted small mb-4 mb-lg-0">&copy; Image Management 2021. All Rights Reserved.</p>
              </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
