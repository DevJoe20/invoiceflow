import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import BuiltFor from "../Components/BuiltFor"
import PowerfulFeatures from "../Components/PowerfulFeatures"
import Process from "../Components/Process"
import FAQ from "../Components/FAQ"
import StopManual from "../Components/StopManual"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <BuiltFor />

        <section id="features">
          <PowerfulFeatures />
        </section>

        <section id="how-it-works">
          <Process />
        </section>

        <section id="faq">
          <FAQ />
        </section>
        
        <StopManual />
        <Footer />
    </div>
  )
}

export default Home