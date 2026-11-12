import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/tasks", tasksRouter);

const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
