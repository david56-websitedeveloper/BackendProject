let express = require('express');
let app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send({ status: 1, msg: 'hello world' })
}
)



app.get("/news", (req, res) => {
  res.send({ status: 1, msg: "New" });
});


app.get("/news/:id", (req, res) => {
    let currentId = req.params.id;
  res.send("News Updtaed" + currentId); 
});

app.post("/login", (req, res) => {
    console.log(req);
    res.send
        ({
            status: 1,
            msg: "Login Api",
            bodyData: req.body,
            queryData: req.query,
            // paramsData: req.params
        });
}
);
app.listen("8000");