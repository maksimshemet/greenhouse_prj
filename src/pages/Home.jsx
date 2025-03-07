import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import BenefitsSection from '../components/BenefitsSection';
import FeatureSection from '../components/FeatureSection';
import ProductFeatures from '../components/ProductFeatures';
import ProductCard from '../components/ProductCard';
import CounterfeitComparison from '../components/CounterfeitComparison';
import TestimonialsSection from '../components/TestimonialsSection';
import KeyFeatures from '../components/KeyFeatures';
import Footer from '../components/Footer';

function Home() {
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
  );
}

export default Home;