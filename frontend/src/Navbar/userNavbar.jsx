import { Link } from 'react-router-dom';

const UserNavbar = () => {

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
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/parking-slots-by-station">
                    Nearby Parking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/parking-bookings">
                    My Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/availabe-rides-by-station">
                    Rides
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/ride-bookings">
                    My Rides
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
  
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
