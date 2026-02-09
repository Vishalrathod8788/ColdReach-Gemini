import { generateColdMessage } from "../utils/gemini.js";

export const userData = async (req, res) => {
  try {
    const { bio, template, jd, type } = req.body;
    

    // Validation
    if (!bio || !template || !jd) {
      return res.status(400).json({
        success: false,
        message: "Bio, template, and job description are required",
      });
    }

    console.log("Received data for processing...");
    console.log("Type:", type || "message");

    // Generate cold message or email using Gemini
    const coldMessage = await generateColdMessage(bio, template, jd, type || "message");

    res.status(200).json({
      success: true,
      message: "Cold message generated successfully",
      data: {
        coldMessage: coldMessage.trim(),
      },
    });
  } catch (error) {
    console.error("Error generating cold message:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate cold message",
      error: error.message,
    });
  }
};
