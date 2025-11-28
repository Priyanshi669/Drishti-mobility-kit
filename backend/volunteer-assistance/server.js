// Drishti Mobility Kit - Volunteer Assistance Server (Placeholder)

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Drishti Volunteer Assistance Server Running (Placeholder)");
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
