import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();


const MOVIES = [
    {
        title: "The matrix from server",
        plot: "nfjkjfkdjf",
        year: 1999

    },
    {
        title: "The color Purple from server",
        plot: "jajajajaja",
        year: 1985
    }
]

app.use(bodyParser.json());

app.get("/api/movies", (req, res) => {
res.json( MOVIES)
});

app.post("/api/movies", (req, res) => {

    const {title, year, plot} = req.body;
    MOVIES.push({title, year, plot});
    res.sendStatus(200);

});

app.use(express.static(path.resolve("..", "client", "dist")));
app.use((req, res) => {
    res.sendFile(path.resolve("..", "client", "dist", "index.html"));

});



const server = app.listen = app.listen(3000, () => {
    console.log("Listening on http://localhost:" + server.address().port);

});