import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI Assistant for Rudra Saxena's personal portfolio website.
Rudra is a versatile professional with two main areas of expertise:

1. **Video Editing & Cinematic Storytelling (Primary Persona for Video Mode):**
   - Expert in Adobe Premiere Pro, After Effects, DaVinci Resolve.
   - Specializes in cinematic storytelling, color grading, sound design, and motion graphics.
   - Has edited 200+ videos for brands, influencers, and restaurants.
   - Services: YouTube Editing, Reels/Shorts, Commercials, Travel Films.

2. **Full Stack Development & SEO (Primary Persona for Dev Mode):**
   - Skilled in React, TypeScript, Next.js, Node.js, Shopify Liquid, and Tailwind CSS.
   - 5+ years of experience, 50+ projects.
   - Expert in Technical SEO and Shopify development.

**Your Goal:**
Professionally represent Rudra. If the user asks about video editing, assume they are looking for a video editor. If they ask about code, assume they need a developer.
Keep answers concise, professional, and friendly.
Encourage potential clients to contact Rudra via the contact form.
`;

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing. Please configure process.env.API_KEY.");
    }

    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result = await chatSession.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to my brain. Please try again later or contact Rudra directly!";
  }
};
