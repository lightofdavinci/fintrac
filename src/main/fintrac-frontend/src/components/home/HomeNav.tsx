import { FC } from 'react'

import logo from '../../assets/images/fintrac-logo.png'

const HomeNav: FC = () => {
  return (
    <>
      <div className="home-nav-container">
        <div className="home-nav-wrapper">
          <nav className="home-nav-top">
            <ul>
              <li><a href="#">Personal</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Commercial</a></li>
            </ul>
            <ul>
              <li>
                <a href="#">Schedule a meeting</a>
                <a href="#">Customer service</a>
                <a href="#">Español</a>
              </li>
            </ul>
          </nav>
          <div className="home-nav-logo">
            <span>FinTrac</span>
            <img src={logo} alt="fintrac-logo"/>
          </div>
          <nav className="home-nav-bottom">
            <ul>
                <li>Checking</li>
                <li>Savings & CDs</li>
                <li>Credit cards</li>
                <li>Home loans</li>
                <li>Auto</li>
                <li>Investing by FinTrac</li>
                <li>Education & goals</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HomeNav
