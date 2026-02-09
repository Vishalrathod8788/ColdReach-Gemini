export const corsOption = {
  origin: [
    "http://localhost:5173",
    /\.vercel\.app$/, // Ye saare vercel subdomains ko allow kar dega
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
