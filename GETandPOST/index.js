const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))//to acess the views from parent directory
app.use(express.urlencoded({extended:true}))
app.listen(port,()=>{
console.log("app is listening on the port 8080");
})

app.get("/form",(req,res)=>{
    res.render("form.ejs");
});

app.get("/register",(req,res)=>{
   res.send("standard GET response");
   res.render("form.ejs")
})
app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`username : ${user} password : ${password}`);
})