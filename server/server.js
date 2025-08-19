import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoute.js";
import blogRouter from "./routes/blogRoute.js";
import newsLetterRouter from "./routes/newsLetterRoute.js";

const app = express();

await connectDB();

// middleware

app.use(cors());
app.use(express.json());

// ROUTES

app.get("/", (req, res)=> res.send("API is working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);
app.use("/api/newsletter", newsLetterRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("server is running on " + PORT);
})


export default app;