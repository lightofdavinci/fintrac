import { FC } from 'react'

import optionBlocks from '../../assets/images/what-is-right-blocks.jpg';
import skier from '../../assets/images/skier.jpg';
import kids from '../../assets/images/kids.jpg';

const HomeWhatIsRight: FC = () => {
  return (
    <>
      <div className="home-what-is-right-container">
        <h2>Choose what's right for you</h2>
        <img className="home-what-is-right-img-blocks" src={optionBlocks} alt="product-options" />
        <div className="home-what-is-right-first-row">
          <div>
            <img src={skier} alt="skier"/>
          </div>
          <div>
            <p>Get $0 plan fees on your first plan</p>
            <p>Pay over time and break up eligible purchases into equal monthly payments with My FinTrac Plan<sup>®</sup>. For a limited time, pay $0 plan fees on the first plan you create by 3/31/25.</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="home-what-is-right-second-row">
          <div>
            <p>New FinTrac checking customers</p>
            <p>Enjoy $100 when you open a FinTrac Secure Banking℠ account with qualifying transactions.</p>
            <button>Learn more</button>
          </div>
          <div>
            <img src={kids} alt="kids"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeWhatIsRight
