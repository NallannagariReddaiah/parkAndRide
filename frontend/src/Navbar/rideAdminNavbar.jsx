import { Link } from 'react-router-dom';

const RideAdminNavbar = () => {
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
          data-bs-target="#rideAdminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="rideAdminNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/rides">
                Manage Rides
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ride-admin/fetch-rides">
                Ride Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ride-admin/add-ride">
                Add Ride
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RideAdminNavbar;
