import { FC } from 'react'

import HomeSignInForm from './HomeSignInForm'
import barChart from '../../assets/images/bar-chart.jpg';

const HomeSignIn: FC = () => {
  return (
    <>
      <div className="home-sign-in-container">
        <div className="home-sign-in-wrapper">
          <div className="home-sign-in-left-block">
            <img src={barChart} alt="bar-chart" />
            <div>
              <p>A planning tool made for you</p>
              <p>Get guidance toward your financial future with FinTrac Wealth Plan, a free digital money coach exclusively for our customers.</p>
              <button type="button">Learn more</button>
            </div>
          </div>
          <div className="home-sign-in-right-block">
            <HomeSignInForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSignIn
