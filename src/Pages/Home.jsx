import HeroBanner from '../Components/HeroBanner'
import { Course } from "../Components/Course"
import Exclusive from "../Components/Exclusive"
import Filmography from "../Components/Filmography"
import Affiliations from "../Components/Affiliations"
import ContactPage from "../Components/ContactPage"
import Mentors from '../Components/Mentors'

const Home = () => {
  return (
    <>
    <HeroBanner />
    <Course />
    <Exclusive />
    <Mentors />
    <Filmography />
    <Affiliations />
    <ContactPage />
    </>
  )
}

export default Home