require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const router = require("./routes/route.js");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use("/app", router);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err.message))


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));