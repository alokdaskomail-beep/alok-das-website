import React from 'react';
import Link from 'next/link';
// CORRECTED: Replaced 'Handshake' with 'HeartHandshake'
import { BookOpen, CloudCog, Zap, BarChart, Users, Lightbulb, Search, DraftingCompass, Rocket, HeartHandshake } from 'lucide-react';

// Button component re-definition for self-containment
function Button({ children }: { children: React.ReactNode }) {
  return <span className="inline-block px-8 py-4 rounded-md font-bold text-white transition-transform transform hover:scale-105 bg-primary hover:bg-orange-600">{children}</span>;
}

const offerings = [
  { icon: <BookOpen className="w-8 h-8 text-primary" />, title: "Online Booking System Integration", description: "Implement a seamless, direct booking engine on your website." },
  { icon: <CloudCog className="w-8 h-8 text-primary" />, title: "Cloud-Based Operations", description: "Migrate your property management systems (PMS) to the cloud." },
  { icon: <Zap className="w-8 h-8 text-primary" />, title: "Process Automation", description: "Automate repetitive tasks like guest communication and reporting." }
];
const benefits = [
    { icon: <BarChart className="w-10 h-10 text-accent" />, title: "Improved Efficiency", description: "Streamline your workflows and reduce manual errors." },
    { icon: <Users className="w-10 h-10 text-accent" />, title: "Enhanced Guest Satisfaction", description: "Provide a modern, smooth digital experience." },
    { icon: <Lightbulb className="w-10 h-10 text-accent" />, title: "Data-Driven Decisions", description: "Gain valuable insights from your operations." }
];
const processSteps = [
    { icon: <Search className="w-12 h-12 text-primary" />, title: "1. Assessment", description: "Analysis of your current digital capabilities." },
    { icon: <DraftingCompass className="w-12 h-12 text-primary" />, title: "2. Strategy", description: "Customized digital transformation roadmap." },
    { icon: <Rocket className="w-12 h-12 text-primary" />, title: "3. Implementation", description: "Integration of new technologies and processes." },
    // CORRECTED: Using the real icon name here
    { icon: <HeartHandshake className="w-12 h-12 text-primary" />, title: "4. Support", description: "Ongoing support and training." }
];

export default function DigitalTransformationPage() {
  return (
    <div className="pb-24 space-y-20">
      <section className="bg-white py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800">Digital Transformation Consulting</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">Reshaping your business by leveraging cutting-edge digital technology.</p>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-gray-800">What We Offer</h2></div>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="inline-block bg-background p-4 rounded-full mb-4">{item.icon}</div>
              <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
           <div className="mb-12"><h2 className="font-serif text-4xl font-bold">Key Benefits</h2></div>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((b) => (<div key={b.title}><div className="flex justify-center mb-4">{b.icon}</div><h3 className="text-2xl font-bold mb-2">{b.title}</h3><p className="text-blue-200">{b.description}</p></div>))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4">
         <div className="text-center mb-16"><h2 className="font-serif text-4xl font-bold text-gray-800">Our Proven Process</h2></div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {processSteps.map((s) => (<div key={s.title} className="flex flex-col items-center"><div className="mb-4">{s.icon}</div><h3 className="text-xl font-bold mb-2">{s.title}</h3><p className="text-gray-600 max-w-xs">{s.description}</p></div>))}
        </div>
      </section>
      <section className="container mx-auto px-4">
        <div className="bg-background rounded-lg p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">A free, no-obligation consultation is the first step.</p>
            <Link href="/contact"><Button>Book a Free Consultation</Button></Link>
        </div>
      </section>
    </div>
  );
}
