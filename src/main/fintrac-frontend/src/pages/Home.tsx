import { FC } from 'react'
import HomeNav from '../components/home/HomeNav'
import HomeSignIn from '../components/home/HomeSignIn'
import HomeWhatIsRight from '../components/home/HomeWhatIsRight'
import CommonFooter from '../components/common/CommonFooter'
import './Home.css'

const Home: FC = () => {
  return (
    <>
      <HomeNav />
      <HomeSignIn />
      <HomeWhatIsRight />
      <CommonFooter />
    </>
  )
}

export default Home
