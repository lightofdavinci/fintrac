import { FC } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { List, Search, Flag, PersonCircle } from 'react-bootstrap-icons';
import logo from '../../assets/images/fintrac-logo.png'

const DashboardNav: FC = () => {
  const location = useLocation();
  return (
    <>
      <div className="dashboard-nav-container">
          <nav className="dashboard-nav-top">
            <ul>
              <li><a href="#"><List color="#fff" size={32} /></a></li>
              <li><a href="/dashboard"><img src={logo} alt="fintrac-logo"/></a></li>
            </ul>
            <ul>
              <li><a href="#"><Search color="#fff" size={23} /></a></li>
              <li><a href="#"><Flag color="#fff" size={23} /></a></li>
              <li><a href="#"><PersonCircle color="#fff" size={23} /></a></li>
              <li><a href="#">Sign out</a></li>
            </ul>
          </nav>
          <nav className="dashboard-nav-bottom">
            <ul>
                <li><Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>Accounts<span className="dashboard-nav-arrow-up"></span></Link></li>
                <li><a href="#">Pay & transfer<span className="dashboard-nav-arrow-up"></span></a></li>
                <li><a href="#">Plan & track<span className="dashboard-nav-arrow-up"></span></a></li>
                <li><a href="#">Investments<span className="dashboard-nav-arrow-up"></span></a></li>
                <li><a href="#">Security & privacy<span className="dashboard-nav-arrow-up"></span></a></li>
                <li><a href="#">Explore Products<span className="dashboard-nav-arrow-up"></span></a></li>
            </ul>
          </nav>
      </div>
    </>
  )
}

export default DashboardNav
