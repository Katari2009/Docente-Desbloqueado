import { GoogleGenAI, Type } from "@google/genai";
import type { QuizQuestion, Module, RubricFeedbackData } from '../types';

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

export async function generatePersonalizedFeedback(moduleContent: string, question: string, userAnswer: string, correctAnswer: string): Promise<string> {
  try {
    const isCorrect = userAnswer === correctAnswer;
    const prompt = `
      Actúa como un tutor pedagógico experto y empático. Un docente ha respondido una pregunta sobre un taller de formación. Proporciona una retroalimentación breve, constructiva y personalizada en español.

      Contexto del Taller: "${moduleContent}"
      Pregunta: "${question}"
      Respuesta Correcta: "${correctAnswer}"
      Respuesta del Docente: "${userAnswer}"

      - Si la respuesta es correcta (${isCorrect}), refuerza positivamente el concepto clave y explica brevemente por qué es la mejor opción, conectándolo con la práctica docente.
      - Si la respuesta es incorrecta (${!isCorrect}), sé amable. Explica por qué la opción elegida no es la correcta y guía suavemente hacia el razonamiento correcto sin dar directamente la respuesta. Menciona el concepto clave que se debe repasar.
      - La retroalimentación no debe exceder las 50 palabras.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating personalized feedback:", error);
    // Fallback feedback
    return userAnswer === correctAnswer ? "¡Correcto! Excelente comprensión del tema." : "Esa no es la respuesta correcta. Revisa el contenido del taller para aclarar el concepto.";
  }
}

export async function generatePedagogicalResource(resourceTitle: string): Promise<string> {
    try {
        const prompt = `
            Actúa como un experto en diseño instruccional y pedagogía. Genera un recurso educativo práctico y bien estructurado en español para docentes sobre el siguiente tema: "${resourceTitle}".

            El recurso debe ser:
            - Claro y conciso.
            - Orientado a la acción y aplicable en el aula.
            - Estructurado con encabezados (usando markdown #, ##), listas y puntos clave.
            - El contenido debe ser original, útil y no genérico.

            Formato: Markdown.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error generating pedagogical resource:", error);
        throw new Error("No se pudo generar el recurso. Por favor, inténtalo de nuevo.");
    }
}

export async function generateForumResponse(question: string, moduleContext: string): Promise<string> {
    try {
        const prompt = `
            Actúa como un asesor pedagógico experto y amigable en un foro de una comunidad de docentes. Responde la siguiente pregunta de un colega de manera clara, concisa y útil, en español.

            Contexto del módulo sobre el que pregunta: "${moduleContext}"
            Pregunta del docente: "${question}"

            Tu respuesta debe:
            - Ser directa y resolver la duda.
            - Ofrecer un ejemplo práctico si es posible.
            - Mantener un tono de apoyo y colaboración.
            - No exceder las 150 palabras.
        `;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        return response.text.trim();
    } catch (error) {
        console.error("Error generating forum response:", error);
        throw new Error("No se pudo obtener una respuesta. Intenta reformular tu pregunta.");
    }
}

export async function generateRubricFeedback(module: Module, score: number, totalQuestions: number): Promise<RubricFeedbackData> {
    try {
        const performance = (score / totalQuestions) * 100;
        // @FIX: Removed erroneous backslash before template literal start, which was causing a syntax error.
        const prompt = `
            Actúa como un evaluador pedagógico experto. Un docente ha completado un módulo de formación y un quiz. Genera una rúbrica de feedback formativo en formato JSON basada en su desempeño.

            - Módulo: "${module.title}"
            - Contenido del Módulo: "${module.content}"
            - Puntuación del Quiz: ${score} de ${totalQuestions} (${performance.toFixed(0)}%)

            Basado en esta información, evalúa los siguientes criterios y proporciona feedback constructivo en español.
            Para cada criterio (conceptualUnderstanding, practicalApplication, implementationReadiness), asigna un nivel ('Destacado', 'Logrado', 'En Desarrollo', 'Inicial') y escribe un feedback breve.
            Finalmente, crea un resumen con puntos fuertes, áreas de mejora y próximos pasos sugeridos.

            El JSON de salida debe seguir esta estructura exacta:
            {
              "conceptualUnderstanding": { "level": "...", "feedback": "..." },
              "practicalApplication": { "level": "...", "feedback": "..." },
              "implementationReadiness": { "level": "...", "feedback": "..." },
              "summary": { "strengths": "...", "areasForImprovement": "...", "nextSteps": "..." }
            }
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        conceptualUnderstanding: {
                            type: Type.OBJECT,
                            properties: { level: { type: Type.STRING }, feedback: { type: Type.STRING } },
                            required: ["level", "feedback"]
                        },
                        practicalApplication: {
                            type: Type.OBJECT,
                            properties: { level: { type: Type.STRING }, feedback: { type: Type.STRING } },
                             required: ["level", "feedback"]
                        },
                        implementationReadiness: {
                            type: Type.OBJECT,
                            properties: { level: { type: Type.STRING }, feedback: { type: Type.STRING } },
                             required: ["level", "feedback"]
                        },
                        summary: {
                            type: Type.OBJECT,
                            properties: {
                                strengths: { type: Type.STRING },
                                areasForImprovement: { type: Type.STRING },
                                nextSteps: { type: Type.STRING }
                            },
                            required: ["strengths", "areasForImprovement", "nextSteps"]
                        }
                    },
                    required: ["conceptualUnderstanding", "practicalApplication", "implementationReadiness", "summary"]
                }
            },
        });

        return JSON.parse(response.text.trim());
    } catch (error) {
        console.error("Error generating rubric feedback:", error);
        throw new Error("No se pudo generar la rúbrica de feedback.");
    }
}