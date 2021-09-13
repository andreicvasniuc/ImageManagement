import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer bg-light">
      <div class="container">
          <div class="row">
              <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                  <ul class="list-inline mb-2">
                      <li class="list-inline-item">
                        <Link to="/">Upload</Link>
                      </li>
                      <li class="list-inline-item">⋅</li>
                      <li class="list-inline-item">
                        <Link to="/resize">Resize</Link>
                      </li>
                  </ul>
                  <p class="text-muted small mb-4 mb-lg-0">&copy; Image Management 2021. All Rights Reserved.</p>
              </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
