import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export const generateColdMessage = async (
  bio,
  template,
  jd,
  type = "message",
) => {
  const maxRetries = 3;
  const baseDelay = 2000; // 2 seconds

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      let prompt;

      if (type === "email") {
        prompt = `
You are an expert cold email writer. Generate a highly personalized professional cold email based on the following information:

USER BIO: ${bio}

EMAIL TEMPLATE STYLE: ${template}

JOB DESCRIPTION: ${jd}

Instructions:
- Create a professional cold email with a compelling subject line
- Start with "Subject: " followed by the subject line
- Then add a blank line
- Write the email body that matches the template style
- Highlight relevant skills from user bio that match the job requirements
- Keep it professional, concise, and engaging
- Make it specific to the company and role mentioned in JD
- Length should be 150-200 words
- Include a clear call-to-action
- Use proper email formatting

Format:
Subject: [Your compelling subject line]

[Email body]

Generate only the email with subject line, no additional text or explanations.
`;
      } else {
        prompt = `
You are an expert cold message writer. Generate a highly personalized cold message based on the following information:

USER BIO: ${bio}

TEMPLATE STYLE: ${template}

JOB DESCRIPTION: ${jd}

Instructions:
- Create a personalized cold message that matches the template style
- Highlight relevant skills from user bio that match the job requirements
- Keep it professional yet engaging
- Make it specific to the company and role mentioned in JD
- Length should be 100-150 words
- Include a clear call-to-action

Generate only the cold message, no additional text or explanations.
`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      return response.text;
    } catch (error) {
      console.error(`Gemini API Error (Attempt ${attempt}):`, error);

      // If it's the last attempt, throw the error
      if (attempt === maxRetries) {
        throw new Error(
          "Gemini service is currently overloaded. Please try again in a few minutes.",
        );
      }

      // Wait before retrying (exponential backoff)
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};
