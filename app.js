const express = require ('express');
const app = express();
const router = express.Router();
app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log('servidor funcionando');    
});

const mainRouter = require("./router/main")
app.use("/", mainRouter);
