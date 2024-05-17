import { FC } from 'react'
import DashboardNav from '../components/dashboard/DashboardNav'
import CommonFooter from '../components/common/CommonFooter'
import './Dashboard.css'

const Dashboard: FC = () => {
  return (
    <>
      <DashboardNav />
      <CommonFooter />
    </>
  )
}

export default Dashboard
