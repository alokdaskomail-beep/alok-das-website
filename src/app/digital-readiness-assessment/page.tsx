'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

// Button component re-definition
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}
function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-block text-center px-8 py-3 rounded-md font-bold text-white transition-transform transform hover:scale-105";
  const variantClasses = {
    primary: "bg-primary hover:bg-orange-600",
    secondary: "bg-accent hover:bg-blue-700",
  };
  return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>{children}</button>;
}

// ToggleSwitch Component
interface ToggleSwitchProps { id: string; label: string; checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }
function ToggleSwitch({ id, label, checked, onChange }: ToggleSwitchProps) {
  return (
    <label htmlFor={id} className="flex items-center justify-between cursor-pointer bg-white p-4 rounded-lg shadow-sm">
      <span className="text-gray-700">{label}</span>
      <div className="relative">
        <input id={id} type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
        <div className={`block w-14 h-8 rounded-full transition ${checked ? 'bg-primary' : 'bg-gray-300'}`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${checked ? 'transform translate-x-6' : ''}`}></div>
      </div>
    </label>
  );
}

const questions = {
  'Website & Online Presence': [{ id: 'q1', text: 'Do you have a mobile-friendly website?' }, { id: 'q2', text: 'Does your website have a direct online booking system?' }, { id: 'q3', text: 'Is your business listed and optimized on Google Maps?' }],
  'Digital Marketing': [{ id: 'q4', text: 'Do you actively use social media for marketing?' }, { id: 'q5', text: 'Do you collect guest emails for marketing campaigns?' }, { id: 'q6', text: 'Have you ever run paid online advertisements?' }],
  'Guest Management': [{ id: 'q7', text: 'Do you use a digital Property Management System (PMS)?' }, { id: 'q8', text: 'Do you send automated pre-arrival or post-stay emails?' }, { id: 'q9', text: 'Do you actively collect and respond to online reviews?' }],
  'Automation & AI': [{ id: 'q10', text: 'Are you using any tools to automate repetitive tasks?' }, { id: 'q11', text: 'Do you use a chatbot on your website or social media?' }, { id: 'q12', text: 'Are you using data analytics to understand guest behavior?' }]
};
const allQuestionIds = Object.values(questions).flat().map(q => q.id);

// Results Component
function AssessmentResults({ score }: { score: number }) {
    const { title, description, ctaText, ctaLink } = useMemo(() => {
        if (score >= 85) return { title: "Digitally Savvy!", description: "You have a strong digital foundation. Let's explore advanced automation and AI strategies.", ctaText: "Explore AI & Automation", ctaLink: "/services/technology-integration" };
        if (score >= 50) return { title: "On the Right Track", description: "You've made a great start. A focused digital strategy can significantly boost your results.", ctaText: "Boost Your Digital Marketing", ctaLink: "/services/digital-marketing" };
        return { title: "Getting Started", description: "You have a fantastic opportunity to grow. We recommend starting with a foundational digital transformation.", ctaText: "Book a Free Consultation", ctaLink: "/contact" };
    }, [score]);
    return (
        <div className="text-center bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="font-serif text-2xl text-gray-500 mb-2">Your Digital Readiness Score:</h2>
            <div className="text-7xl font-bold text-primary mb-4">{score}%</div>
            <h3 className="font-serif text-4xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">{description}</p>
            <Link href={ctaLink}><Button variant="primary">{ctaText}</Button></Link>
        </div>
    );
}

// Main Page Component
export default function DigitalReadinessAssessmentPage() {
  const [answers, setAnswers] = useState<Record<string, boolean>>(allQuestionIds.reduce((acc, id) => ({ ...acc, [id]: false }), {}));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => setAnswers(prev => ({ ...prev, [e.target.id]: e.target.checked }));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); };
  const score = useMemo(() => {
    if (!isSubmitted) return 0;
    return Math.round((Object.values(answers).filter(Boolean).length / allQuestionIds.length) * 100);
  }, [answers, isSubmitted]);

  return (
    <>
      <section className="bg-white py-20"><div className="container mx-auto px-4 text-center"><h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800">Digital Readiness Assessment</h1><p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">Answer these questions for an instant snapshot of your business's digital health.</p></div></section>
      <section className="container mx-auto px-4 pb-24"><div className="max-w-4xl mx-auto">
          {isSubmitted ? <AssessmentResults score={score} /> : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {Object.entries(questions).map(([category, qs]) => (
                <fieldset key={category} className="bg-background p-8 rounded-lg">
                  <legend className="font-serif text-3xl font-bold text-gray-800 mb-6">{category}</legend>
                  <div className="space-y-4">{qs.map(q => <ToggleSwitch key={q.id} id={q.id} label={q.text} checked={answers[q.id]} onChange={handleToggle} />)}</div>
                </fieldset>
              ))}
              <div className="text-center pt-8"><Button type="submit" variant="primary">Calculate My Score</Button></div>
            </form>
          )}
      </div></section>
    </>
  );
}