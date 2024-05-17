import { FC } from 'react'
import { CashCoin, CreditCard, Houses, PiggyBank, Truck, Briefcase } from 'react-bootstrap-icons';

const CommonFooter: FC = () => {
  return (
    <>
      <footer>
            <h2>We're here to help you manage your money today and tomorrow</h2>
            <div className="footer-row">
              <div className="footer-col">
                <div>
                  <div className="footer-icon" aria-hidden="true"><CashCoin color="#999" size={29} /></div>
                  <h3>Checking Accounts</h3>
                  <div>
                    <p>Choose the <a href="#">checking account</a> that works best for you.&nbsp;See&nbsp;our <a href="#">FinTrac Total Checking<sup>®</sup></a>&nbsp;offer for new customers.&nbsp;Make purchases with your debit card, and bank from almost anywhere by phone, tablet or computer and more than 15,000 ATMs and more than 4,700 branches.</p>
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <div>
                  <div className="footer-icon" aria-hidden="true"><PiggyBank color="#999" size={29} /></div>
                  <h3>Savings Accounts &amp; CDs</h3>
                  <div>
                    <p>It’s never too early to begin saving. <a href="#">Open a savings account</a> or open a Certificate of Deposit (<a href="#">see interest rates</a>) and start saving your money.</p>
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <div>
                  <div className="footer-icon" aria-hidden="true"><CreditCard color="#999" size={29} /></div>
                    <h3>Credit Cards</h3>
                    <div><p>FinTrac <a href="#">credit cards</a>&nbsp;can help you buy the things you need. Many of our cards&nbsp;<a href="#">offer rewards</a> that can be redeemed for <a href="#">cash back</a>&nbsp;or <a href="#">travel-related</a> perks. With so many options, it&nbsp;can be&nbsp;easy to find a card that matches your lifestyle. Plus, with Credit Journey you can get a&nbsp;<a href="#">free credit score</a>!</p>
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <div>
                  <div className="footer-icon" aria-hidden="true"><Houses color="#999" size={29} /></div>
                    <h3>Mortgages</h3>
                    <div>
                      <p>Apply for a <a href="#">mortgage</a> or <a href="#">refinance your mortgage</a> with FinTrac. View today’s <a href="#">mortgage rates</a> or calculate what you can afford with our <a href="#">mortgage calculator</a>. Visit our <a href="#">Education Center</a> for homebuying tips and more.</p>
                    </div>
                </div>
              </div>
              <div className="footer-col">
                <div>
                  <div className="footer-icon" aria-hidden="true"><Truck color="#999" size={29} /></div>
                  <h3>Auto</h3>
                  <div>
                    <p><a href="#">FinTrac Auto</a> is here to help you get the right car. Apply for <a href="#">auto financing</a> for a new or used car with FinTrac. Use the <a href="#">payment calculator</a> to estimate monthly payments.&nbsp;Check out the <a href="#">FinTrac Auto Education Center</a> to get car guidance from a trusted source.</p>
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <div>
                  <div className="footer-icon" aria-hidden="true"><Briefcase color="#999" size={29} /></div>
                  <h3>FinTrac for Business</h3>
                  <div>
                    <p>With FinTrac for Business you’ll receive guidance from a team of business professionals who specialize in helping improve cash flow, providing credit solutions, and managing payroll. Choose from <a href="#">business checking</a>, <a href="#">small business loans</a>, <a href="#">business credit cards</a>, <a href="#">merchant services</a> or visit our <a href="#">business resource center</a>.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              © {new Date().getFullYear()} FinTrac.
            </div>
          </footer>
    </>
  )
}

export default CommonFooter
