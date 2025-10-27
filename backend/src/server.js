import express from "express"
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json());

app.use((req, res, next) => {
    console.log("NEW Request Received:");
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
    
app.use("/api/notes", noteRoutes);


app.listen(5001, () => {
    console.log("Server is running on port: ", PORT);
});

