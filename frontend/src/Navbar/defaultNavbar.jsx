import { Link } from 'react-router-dom';

const UserNavbar = () => {
  const isLoggedIn = document.cookie.includes('jwt=');

  const handleLogout = () => {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary fw-bold fs-4" to="/">
          Park & Ride
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#userNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="userNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">

              <li className="nav-item dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  id="loginDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </button>
                <ul className="dropdown-menu dropdown-menu-end left-10" aria-labelledby="loginDropdown">
                  <li>
                    <Link className="dropdown-item" to="/user/login">
                      User 
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ride-admin/login">
                      Ride Admin 
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/parking-admin/login">
                      Parking Admin 
                    </Link>
                  </li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
