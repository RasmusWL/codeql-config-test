const express = require('express');
const cp = require("child_process")

const app = express();

app.get('/example', async (req, res) => {
    unsafe = req.query.key;
    cp.exec(unsafe);
    res.status(200);
    res.send("ok");
});

app.listen(8080);
