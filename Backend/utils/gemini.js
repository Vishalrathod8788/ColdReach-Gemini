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
You are an expert professional email writer.

GOAL:
Generate a SHORT, clear, and professional job application email.

USER PROFILE:
${bio}

USER-SELECTED EMAIL TEMPLATE (STRICT — FOLLOW STRUCTURE & TONE):
${template}

JOB DESCRIPTION:
${jd}

STRICT INSTRUCTIONS (NON-NEGOTIABLE):
- Follow the TEMPLATE style and structure
- Generate a relevant subject line
- Start with "Subject: " followed by the subject
- Add one blank line after the subject
- Keep the email professional and direct
- Mention alignment between job role and user skills
- Mention relevant tech stack or projects only if applicable
- DO NOT use generic phrases like "excited to apply" or "dream opportunity"
- DO NOT add unnecessary storytelling
- Length must be between 80–120 words
- Include a soft call-to-action (e.g. "I’d be happy to discuss further")
- Use proper email formatting

OUTPUT FORMAT:
Subject: [Relevant subject line]

[Email body]

Generate ONLY the email with subject line.
No explanations, no extra text.
`;
      } else if (type === "message") {
        prompt = `
You are an expert LinkedIn cold message writer.

GOAL:
Generate a SHORT, professional cold message for LinkedIn or direct messaging.

USER PROFILE:
Bio: ${bio}

USER-SELECTED TEMPLATE (STRICT — DO NOT CHANGE STRUCTURE):
${template}

JOB DESCRIPTION:
${jd}

STRICT RULES (NON-NEGOTIABLE):
- Follow the TEMPLATE structure exactly
- Replace placeholders using USER PROFILE and JD
- DO NOT add new sentences or paragraphs
- DO NOT add excitement, storytelling, or buzzwords
- Message must be concise and recruiter-friendly
- Maximum length: 40–60 words total
- No subject line
- No email-style formatting
- CTA must be soft (e.g. “Sharing my profile for your review”)

OUTPUT REQUIREMENTS:
- Plain text only
- Same line breaks as TEMPLATE
- No explanations, no headings, no extra text

Generate ONLY the final cold message.
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
