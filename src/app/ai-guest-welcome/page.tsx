'use client';

import React, { useState, useTransition } from 'react';
// We will create the 'generateWelcomeMessage' function in a separate file later.
// For now, this will show an error, but that's okay.
import { generateWelcomeMessage } from '@/app/actions'; 
import { Sparkles } from 'lucide-react';

// Button component re-definition
function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = "inline-block text-center px-8 py-3 rounded-md font-bold text-white transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = "bg-primary hover:bg-orange-600 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed";
  return <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>{children}</button>;
}

export default function AiGuestWelcomePage() {
  const [guestProfile, setGuestProfile] = useState('');
  const [tripPurpose, setTripPurpose] = useState('');
  const [result, setResult] = useState<{ welcomeMessage?: string; error?: string } | null>(null);
  
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);

    startTransition(async () => {
      // This function doesn't exist yet, so we'll simulate a result for now.
      // const response = await generateWelcomeMessage(guestProfile, tripPurpose);
      const response = { welcomeMessage: `This is a simulated AI welcome message for a guest who is a ${guestProfile} and is here for ${tripPurpose}. We'll connect the real AI in the next step!` };
      setResult(response);
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800">
            AI Personalized Welcome
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Create a warm, personalized welcome message for your guests in seconds.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Form */}
          <div className="bg-background p-8 rounded-lg">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">Guest Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="guestProfile" className="block text-sm font-bold text-gray-700 mb-2">Guest Profile</label>
                <textarea
                  id="guestProfile"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-gray-800"
                  placeholder="e.g., A couple from London celebrating their 10th anniversary, loves hiking."
                  value={guestProfile}
                  onChange={(e) => setGuestProfile(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="tripPurpose" className="block text-sm font-bold text-gray-700 mb-2">Purpose of Trip</label>
                <textarea
                  id="tripPurpose"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-gray-800"
                  placeholder="e.g., A relaxing wellness retreat to escape the city and enjoy nature."
                  value={tripPurpose}
                  onChange={(e) => setTripPurpose(e.target.value)}
                  required
                />
              </div>
              <div>
                <Button type="submit" disabled={isPending} className="w-full flex items-center justify-center gap-2">
                  {isPending ? 'Generating...' : 'Generate Message'}
                  <Sparkles size={20} />
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column: Result */}
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center min-h-[300px]">
            {isPending && (
              <div className="text-center text-gray-500">
                <Sparkles className="animate-spin h-12 w-12 mx-auto" />
                <p className="mt-4">Crafting the perfect welcome...</p>
              </div>
            )}
            {!isPending && result?.welcomeMessage && (
              <div className="font-serif text-lg text-gray-700 leading-relaxed">
                {result.welcomeMessage}
              </div>
            )}
            {!isPending && result?.error && (
              <div className="text-red-600">
                <p><strong>Error:</strong> {result.error}</p>
              </div>
            )}
            {!isPending && !result && (
              <div className="text-center text-gray-400">
                <p>Your personalized welcome message will appear here.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}