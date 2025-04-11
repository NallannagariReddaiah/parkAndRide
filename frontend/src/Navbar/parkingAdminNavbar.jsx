import { Link } from 'react-router-dom';

const ParkingAdminNavbar = () => {
  const handleLogout = () => {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-success fw-bold fs-4" to="/">
          Park & Ride
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#parkingAdminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="parkingAdminNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/parking">
                Manage Parking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/parking-admin/add-parking-sport">
                Add Parking Area
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/parking-admin/fetch-parking-areas">
                Parking Bookings
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-success" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ParkingAdminNavbar;
