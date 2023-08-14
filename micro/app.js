const express = require("express");
const app = express();

const path = require("path");
//resursos estaticos
app.use(express.static(__dirname + "/public"));
//-------------Manejo de ruti---
//ruta raiz 
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.listen(3030, () => console.log("servidor listo!"))