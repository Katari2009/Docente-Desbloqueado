import { GoogleGenAI, Type } from "@google/genai";
import type { QuizQuestion } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generateQuizQuestions(moduleContent: string): Promise<QuizQuestion[]> {
  try {
    const prompt = `
      Actúa como un experto pedagógico especializado en la formación de docentes. Basado en el siguiente texto de un taller, genera un array de 3 preguntas de opción múltiple únicas para evaluar la comprensión de un profesor.
      
      Para cada pregunta, proporciona:
      1.  La pregunta en sí (propiedad "question").
      2.  Un array de 4 opciones de respuesta (propiedad "options").
      3.  La respuesta correcta exacta como una cadena de texto (propiedad "correctAnswer").
      4.  Una breve y útil explicación de por qué la respuesta es correcta (propiedad "explanation").

      El contenido está en español; las preguntas, opciones, respuesta correcta y explicación también deben estar en español. Asegúrate de que las opciones sean plausibles pero solo una sea la correcta.

      IMPORTANTE: Al formular las preguntas, refiérete al contenido como 'el taller' o usa un lenguaje que implique que la información fue presentada en un taller. Evita usar la palabra 'texto'.

      Texto del Taller:
      ---
      ${moduleContent}
      ---
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              correctAnswer: { type: Type.STRING },
              explanation: { type: Type.STRING },
            },
            required: ["question", "options", "correctAnswer", "explanation"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const questions = JSON.parse(jsonText);

    // Basic validation
    if (!Array.isArray(questions) || questions.some(q => !q.question || !q.options)) {
        throw new Error("Invalid question format received from API.");
    }

    return questions as QuizQuestion[];

  } catch (error) {
    console.error("Error generating quiz questions:", error);
    // Fallback or re-throw
    throw new Error("No se pudieron generar las preguntas. Por favor, inténtalo de nuevo.");
  }
}