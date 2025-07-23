import React from 'react';
import Link from 'next/link';
import { Server, Megaphone, Users, Cpu } from 'lucide-react';
import LeadMagnetForm from '@/components/ui/LeadMagnetForm'; // <-- IMPORT THE NEW COMPONENT

// --- Sub-Components for the Homepage ---
function Button({ children }: { children: React.ReactNode }) {
  const baseClasses = "inline-block px-8 py-3 rounded-md font-bold text-white transition-transform transform hover:scale-105 bg-primary hover:bg-orange-600";
  return <span className={baseClasses}>{children}</span>;
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow">
      <div className="bg-primary text-white rounded-full p-4 mb-4">{icon}</div>
      <h3 className="font-serif text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link href={href} className="mt-4 text-primary font-bold hover:underline">Learn More</Link>
    </div>
  );
}

// --- Data for the Homepage ---
const services = [
  { icon: <Server size={32} />, title: "Digital Transformation Consulting", description: "Strategic guidance to integrate digital technology into all areas of your business.", href: "/services/digital-transformation" },
  { icon: <Megaphone size={32} />, title: "Digital Marketing", description: "Targeted online campaigns to boost your visibility and attract more guests.", href: "/services/digital-marketing" },
  { icon: <Users size={32} />, title: "Training & Capacity Building", description: "Empowering your team with the digital skills needed to excel in the modern era.", href: "/services/training" },
  { icon: <Cpu size={32} />, title: "Technology Integration", description: "Seamlessly implement and manage the right tech for your operational needs.", href: "/services/technology-integration" }
];

const testimonials = [
  { quote: "Working with Alok was a game-changer. Our online bookings have tripled.", name: "Priya Gurung", title: "Owner, Mountain View Resort", avatar: "https://placehold.co/100x100/E67E22/white?text=PG" },
  { quote: "The digital marketing strategy developed for us was brilliant.", name: "Ramesh Thapa", title: "Manager, Himalayan Trails Trekking", avatar: "https://placehold.co/100x100/2980B9/white?text=RT" },
  { quote: "The team training was incredibly valuable. Our staff is now more confident.", name: "Sunita Lama", title: "Director, Annapurna Boutique Hotel", avatar: "https://placehold.co/100x100/F1C40F/white?text=SL" }
];


// --- The Main Homepage Component ---
export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32 mb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="https://placehold.co/1920x1080/333/555?text=Himalayan+Scenery" alt="Himalayas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 p-4">
          <h1 className="font-serif text-4xl md:text-7xl font-bold drop-shadow-lg">Digital Transformation for Hospitality</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">Leveraging technology to enhance guest experiences and drive growth.</p>
          <div className="mt-8">
            <Link href="/digital-readiness-assessment"><Button>Start Your Assessment</Button></Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-gray-800">Our Services</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-white/40 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-gray-800">What Our Clients Say</h2></div>
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-10/12 md:w-1/3 bg-white rounded-lg shadow-lg p-8">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary"/>
                <p className="text-gray-600 italic text-center mb-4">"{t.quote}"</p>
                <div className="text-center"><p className="font-bold text-gray-800">{t.name}</p><p className="text-sm text-accent">{t.title}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Lead Magnet Section */}
      <section className="container mx-auto px-4">
        <div className="bg-accent text-white rounded-lg p-12 flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl font-bold">Get Your Free Guide to Digital Success</h2>
          <p className="mt-2 mb-6 max-w-2xl">Download our exclusive guide on the top 5 digital strategies for your business.</p>
          {/* USE THE NEW COMPONENT HERE */}
          <LeadMagnetForm />
        </div>
      </section>
    </div>
  );
}
