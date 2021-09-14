import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
            <Link className="navbar-brand" to="/">Image Management</Link>
            <Link className="navbar-brand" to="/">Upload</Link>
            <Link className="navbar-brand" to="/resize">Resize</Link>
        </div>
    </nav>
  );
}

export default Navigation;
