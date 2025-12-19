
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale di S.P.A.R.K. (Software, Problem solving, Apps, Research & Knowledge), una startup fondata da Maurizio Pantano e Mattia Sebastiano Lacanna.
Il tuo obiettivo è spiegare i servizi offerti (Siti Web, E-commerce, App Mobile, Gestionali, Problem Solving Tecnico) e aiutare i potenziali clienti a definire le loro idee.
Sii professionale ma innovativo, usando un tono energico e tecnologico.
Se ti chiedono un preventivo, spiega che puoi dare solo stime approssimative e invitali a contattare direttamente i fondatori per i dettagli precisi.
Sottolinea la competenza di Maurizio e Mattia nello sviluppo Full Stack e nella ricerca di soluzioni su misura.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    // Initializing GoogleGenAI inside the function to ensure use of the most up-to-date API key
    // and updating the model to 'gemini-3-flash-preview' for basic text tasks.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';
    
    // We use the chat structure to maintain context
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    // Accessing .text property directly as per GenerateContentResponse definition
    return response.text || "Mi dispiace, non sono riuscito a generare una risposta in questo momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Si è verificato un errore di comunicazione con l'IA.");
  }
};
