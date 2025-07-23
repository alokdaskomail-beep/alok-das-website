'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

// IMPORTANT: In a real project, you would get this API key from your Google AI Studio account
// and store it securely as an environment variable.
// For this example, we will assume the key is available.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "YOUR_API_KEY_HERE");

// This is the function our frontend will call.
export async function generateWelcomeMessage(guestProfile: string, tripPurpose: string) {
  if (!guestProfile || !tripPurpose) {
    return { error: 'Please provide both a guest profile and a trip purpose.' };
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
      You are a hospitality expert and the host of a premium hotel in the Himalayas.
      Your tone is warm, welcoming, and professional.
      
      Generate a personalized welcome message for a guest.
      
      Guest Profile: "${guestProfile}"
      Purpose of Trip: "${tripPurpose}"
      
      The message should be about 3-4 sentences long.
      Mention something specific from their profile or trip purpose to show it's personalized.
      End with a warm closing.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return { welcomeMessage: text };

  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate message. Please try again.' };
  }
}