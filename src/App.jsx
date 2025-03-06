import './App.css'
import BenefitsSection from './components/BenefitsSection'
import FeatureSection from './components/FeatureSection'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import ProductFeatures from './components/ProductFeature'
import ProductCard from './components/ProductCard'
import DripIrrigationSection from './components/DripIrrigationSection'
import CounterfeitComparison from './components/CounterfeitComparison'
import TestimonialsSection from './components/TestimonialsSection'
import KeyFeatures from './components/KeyFeatures'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header />
      <HeroBanner />
      <BenefitsSection />
      <FeatureSection />
      <ProductFeatures />
      <ProductCard />
      <CounterfeitComparison />
      <TestimonialsSection />
      <KeyFeatures />
      <Footer />
    </>
    
  )
}

export default App
