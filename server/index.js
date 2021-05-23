const express = require("express");
const cors = require("cors");

const app = express();
const posts = require("./routes/api/posts");

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => {res.sendFile(__dirname + "/public/index.html")})
}

const port = process.env.port || 5000;

app.listen(port,
    () => {
        console.log(`Servidor rodando, na porta ${port}`);
    }
)

app.use("/api/posts", posts);