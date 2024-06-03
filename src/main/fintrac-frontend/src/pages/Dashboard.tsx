import { FC } from 'react'
import DashboardNav from '../components/dashboard/DashboardNav'
import DashboardAccounts from '../components/dashboard/DashboardAccounts'
import AccountsRewards from '../components/dashboard/AccountsRewards'
import CommonFooter from '../components/common/CommonFooter'
import './Dashboard.css'

const Dashboard: FC = () => {
  return (
    <>
      <DashboardNav />
      <main className="dashboard-accounts-main">
        <DashboardAccounts />
        <AccountsRewards />
      </main>
      <CommonFooter />
    </>
  )
}

export default Dashboard
