import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateGeminiDescription(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const description = response.text().trim();

    if (!description) {
      return "⚠️ No description returned.";
    }

    return description;
  } catch (error) {
    console.error("Gemini Error:", error.message);
    return "❌ Error generating description.";
  }
  console.log("Gemini Key:", process.env.GEMINI_API_KEY);

}
