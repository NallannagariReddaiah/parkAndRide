import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import your pages here...
import SignupPage from './pages/Auth/userSignupPage';
import LoginPage from './pages/Auth/userLoginPage';
import RideAdminSignupForm from './components/rideAdmin/rideAdminSignupForm';
import RideAdminLoginForm from './components/rideAdmin/rideAdminLoginForm';
import ParkingAdminSignupForm from './components/parkingAdmin/ParkingAdminSignupForm';
import ParkingAdminLoginForm from './components/parkingAdmin/ParkingAdminLoginForm';
import ParkingSlots from './components/user/fetchParkingSlots';
import AvailableRides from './components/user/fetchAvailableRides';
import AdminAddRide from './components/rideAdmin/addRide';
import RidesPage from './pages/ridePage/ridesPage';
import RidePage from './pages/ridePage/ridePage'
import AddParkingArea from './components/parkingAdmin/addParkingArea';
import ParkingAreas from './pages/parkingPage/parkingAreas';
import ParkingAreaPage from './pages/parkingPage/parkingAreaPage'
import DefaultNavbar from './Navbar/DefaultNavbar';
import UserNavbar from './Navbar/UserNavbar';
import RideAdminNavbar from './Navbar/RideAdminNavbar';
import ParkingAdminNavbar from './Navbar/ParkingAdminNavbar';
import ParkingBookings from './components/user/fetchMyParkingBookings';
import RideBookings from './components/user/fetchMyRideBookings';
import { useAuth } from './context/authcont';
import HomePage from './pages/homePage';

function App() {
  const { user } = useAuth(); // user object contains role

  const getNavbar = () => {
    if (!user) return <DefaultNavbar />;
    switch (user.role) {
      case 'rideAdmin':
        return <RideAdminNavbar />;
      case 'parkingAdmin':
        return <ParkingAdminNavbar />;
      case 'user':
        return <UserNavbar />;
      default:
        return <DefaultNavbar />;
    }
  };
  return (
    <Router>
       {getNavbar()}
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/user/signup" element={<SignupPage />} />
      <Route path="/user/login" element={<LoginPage />} />
      <Route path="/ride-admin/signup" element={<RideAdminSignupForm />} />
      <Route path="/ride-admin/login" element={<RideAdminLoginForm />} />
      <Route path="/parking-admin/signup" element={<ParkingAdminSignupForm />} />
      <Route path="/parking-admin/login" element={<ParkingAdminLoginForm />} />
      <Route path="/user/parking-slots-by-station" element={<ParkingSlots/>}/>
      <Route path='/user/availabe-rides-by-station' element={<AvailableRides/>}/>
      <Route path='/user/parking-bookings' element={<ParkingBookings/>}/>
      <Route path='/user/ride-bookings' element={<RideBookings/>}/>
      <Route path='/ride-admin/add-ride' element={<AdminAddRide/>}/>
      <Route path='/ride-admin/fetch-rides' element={<RidesPage/>}/>
      <Route path='/ride-admin/fetch-ride/:id' element={<RidePage/>}/>
      <Route path='/parking-admin/add-parking-sport' element={<AddParkingArea />}/>
      <Route path='/parking-admin/fetch-parking-areas' element={<ParkingAreas/>}/>
      <Route path='/parking-admin/fetch-parking-area/:id' element={<ParkingAreaPage/>}/>

        {/* <Route path="/parking-nearby" element={<NearbyParking />} />
        <Route path="/parking-bookings" element={<ParkingBookings />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/ride-bookings" element={<RideBookings />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}
export default App;