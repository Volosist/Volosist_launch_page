import Header from './components/Header'
import IntroSection from './components/IntroSection'
import CoreMessage from './components/CoreMessage'
import ServicesSection from './components/ServicesSection'
import CountdownSection from './components/CountdownSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main-content">
          <IntroSection />
          <CountdownSection />
          <CoreMessage />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}

export default App