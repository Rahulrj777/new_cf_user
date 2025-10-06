import HeroBanner from '../Components/HeroBanner'
import { Course } from "../Components/Course"
import Exclusive from "../Components/Exclusive"
import Filmography from "../Components/Filmography"
import Affiliations from "../Components/Affiliations"
import ContactPage from "../Components/ContactPage"

const Home = () => {
  return (
    <>
    <HeroBanner />
    <Course />
    <Exclusive />
    <Filmography />
    <Affiliations />
    <ContactPage />
    </>
  )
}

export default Home