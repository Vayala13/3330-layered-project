import express from "express";

const router = express.Router();

const db = [
    {id: "1", title: "Take a shower", status: "false"},
    {id: "2", title: "Get wingstop for dinner", status: "false"},
    {id: "3", title: "Work on the project for 3330", status: "true"},
];

router.get("/", (req, res, next) => {
    try {
        const allTasks = db;
        res.status(200).json({
            success: true,
            data: allTasks
        });
    } catch (error) {
        next(error);
    }
});

router.post("/", (req, res, next) => {
    try {
        const params = req.body;
        const newTask = {
            id: Math.max(...db.map((user) => user.id)) + 1,
            title: params.title.trim(),
            completed: false
        };
        db.push(newTask);

        res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
});

export default router;
