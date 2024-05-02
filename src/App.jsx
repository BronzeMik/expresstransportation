import './App.css'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PricingCardList from './components/PricingCardList'
import ScheduleRide from './components/ScheduleRide'
import Services from './components/Services'

function App() {


  return (
    <div className='body'>
      <Header />
      <Hero />
      <Services />
      <ScheduleRide />
      <PricingCardList />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
