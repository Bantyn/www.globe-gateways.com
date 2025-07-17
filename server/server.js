const express = require('express');
const app = express();
const router=require('./router/auth_router');

app.use("/api/auth", router);


app.listen(3000);