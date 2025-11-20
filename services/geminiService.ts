import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI Assistant for Rudra Saxena's personal portfolio website.
Rudra is a skilled Full Stack Developer, Shopify Expert, and SEO Optimizer.
His tech stack includes React, TypeScript, Next.js, Node.js, Shopify Liquid, and Tailwind CSS.
He has over 5 years of experience and has completed 50+ successful projects.
Your goal is to professionally represent Rudra, answer questions about his skills and services, and encourage potential clients to contact him via the 'Let's Talk' button or contact form.
Keep answers concise, professional, and friendly.
If asked about something unrelated to Rudra or web development, politely steer the conversation back to his services.
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
