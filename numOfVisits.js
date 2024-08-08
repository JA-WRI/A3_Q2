import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import cookieParser from "cookie-parser";


const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url))
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.cookies.visits) {
        const estDate = Date.now().toLocaleDate("en-US", { timeZone: "America/New_York" });
        const est = new Date(estDate);
        let visits = parseInt(req.cookies.visits);
        res.cookie('visits', visits + 1);
        res.send(`Hello, this is the ${visits + 1} time that you are visiting my webpage. Last time you visited my webpage on: ${estDate}`);
    } else {
        res.cookie('visits', 1 );
        res.send("Welcome to my webpage! It is your first time that you are here.");
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));