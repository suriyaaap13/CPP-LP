import React from 'react';
import Footer from './components/Footer';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section1 from './components/Section1';
import Section5 from './components/Section5';


export default function App() {
  return (
    <div>

      {/* Hero Section Header or Heading */}
      <Section1/>

      {/* Component to show data in alternating manner */}
      <Section2/>

      {/* Together we code better Section */}
      <Section3/>

      {/* Partners Section */}
      <Section4/>

      {/* Community Section */}
      <Section5/>

      {/* FAQs Accordion Section */}

      {/* Contact Us Section */}

      {/* Footer */}
      <Footer/>

    </div>
  )
}
