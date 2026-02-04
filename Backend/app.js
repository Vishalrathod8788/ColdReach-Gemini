import "dotenv/config";
import express from "express";
import cors from "cors";
import { corsOption } from "./middleware/cors.js";
import routes from "./routes/generateRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
