// backend/middleware/cors.js
export const corsOption = {
  origin: [
    "http://localhost:5173",
    "https://coldreach.vishal88.com", // Aapka naya domain (Bina last slash / ke)
    /\.vercel\.app$/, // Saare Vercel domains ke liye
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // OPTIONS zaroori hai
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
