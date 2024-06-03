import { FC } from 'react'
import { ChevronRight, Airplane, CashCoin, Speedometer2, HouseDoor, CarFront } from 'react-bootstrap-icons';
import logo from '../../assets/images/fintrac-logo.png'

const AccountsRewards: FC = () => {
  return (
    <>
     <div className="account-rewards-container">
       <div className="account-rewards-block">
         <h5>Rewards</h5>
         <div className="account-rewards-row">
          <div className="flex-centered">
            <img className="account-rewards-logo" src={logo} alt="fintrac-logo"/>
            <div className="account-rewards-col">
              <span>47.00</span>
              <p className="account-rewards-tp">Ultimate Rewards&reg; points</p>
            </div>
          </div>
          <ChevronRight color="#666" size={20} />
         </div>
       </div>
       <div className="account-rewards-block">
        <h5>Travel</h5>
        <div className="account-rewards-row">
         <div className="flex-centered">
           <div className="account-rewards-circle flex-centered" style={{transform: 'rotate(40deg)', paddingBottom: '0.25rem'}}>
             <Airplane color="#035db8" size={24} />
           </div>
           <div className="account-rewards-col">
             <p className="account-rewards-tep">Explore adventures around the world</p>
             <p className="account-rewards-tp">Book hotels, flights, car rentals & more</p>
           </div>
         </div>
         <ChevronRight color="#666" size={20} />
        </div>
      </div>
       <div className="account-rewards-block">
          <h5>Plan, track & manage</h5>
          <div className="account-rewards-row">
           <div className="flex-centered">
             <div className="account-rewards-circle flex-centered" style={{ paddingTop: '0.3rem'}}>
               <CashCoin color="#035db8" size={26} />
             </div>
             <div className="account-rewards-col">
               <p className="account-rewards-tep">Manage your spending</p>
               <p className="account-rewards-tp">See where your money is going and budget so you can save more.</p>
             </div>
           </div>
           <ChevronRight color="#666" size={20} style={{ minWidth: '20px'}} />
          </div>

          <hr/>

          <div className="account-rewards-row">
             <div className="flex-centered">
               <div className="account-rewards-circle flex-centered" style={{ paddingBottom: '0.2rem'}}>
                 <Speedometer2 color="#035db8" size={28} />
               </div>
               <div className="account-rewards-col">
                 <p className="account-rewards-tep">Credit Journey</p>
                 <p className="account-rewards-tp">Sign up to get your free credit score, alerts & identity restoration services</p>
               </div>
             </div>
             <ChevronRight color="#666" size={20} style={{ minWidth: '20px'}}/>
          </div>

          <hr/>

          <div className="account-rewards-row">
             <div className="flex-centered">
               <div className="account-rewards-circle flex-centered" style={{ paddingBottom: '0.1rem'}}>
                 <HouseDoor color="#035db8" size={28} />
               </div>
               <div className="account-rewards-col">
                 <p className="account-rewards-tep">FinTrac MyHome</p>
                 <p className="account-rewards-tp">See rates, properties and insights, and manage your mortgage</p>
               </div>
             </div>
             <ChevronRight color="#666" size={20} style={{ minWidth: '20px'}} />
          </div>

          <hr/>

           <div className="account-rewards-row">
              <div className="flex-centered">
                <div className="account-rewards-circle flex-centered" style={{ paddingBottom: '0.1rem'}}>
                  <CarFront color="#035db8" size={26} />
                </div>
                <div className="account-rewards-col">
                  <p className="account-rewards-tep">All things auto</p>
                  <p className="account-rewards-tp">Get financing and insights to help you buy and own a car.</p>
                </div>
              </div>
              <ChevronRight color="#666" size={20} style={{ minWidth: '20px'}} />
            </div>
        </div>
     </div>
    </>
  )
}

export default AccountsRewards
