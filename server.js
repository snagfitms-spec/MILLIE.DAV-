const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Backend is running");
});


const MONGO_URI = "mongodb+srv://snagfitms_db_user:t6slZMwQCcsB2h84@booking1.eemnqgj.mongodb.net/?appName=Booking1;

mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

/
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
