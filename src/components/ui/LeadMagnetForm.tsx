'use client';

import React from 'react';

// Button component re-definition for this client component
function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const baseClasses = "px-6 py-3 rounded-md font-bold text-white transition-transform transform hover:scale-105";
    const variantClasses = "bg-accent hover:bg-blue-700";
    return <button type="submit" className={`${baseClasses} ${variantClasses} ${className}`} {...props}>{children}</button>;
}

export default function LeadMagnetForm() {
  const [email, setEmail] = React.useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert(`Success! Your guide is being "downloaded" for ${email}.`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        className="flex-grow px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" 
        required 
      />
      <Button>Download Now</Button>
    </form>
  );
}
