const express=require("express");
const app=express();
const port=8080;
const path=require("path")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}))//to get the url encodeed data
app.listen(port,()=>{
    console.log("app is listening on the port 8080");
});

app.get("/studentform",(req,res)=>{
    res.render("index.ejs")
})

app.get("/register",(req,res)=>{
    let {username,password}=req.query;
    res.send(`Standard GET request username : ${username} , password :${password} `);//the data is visible in the url
})
app.post("/register",(req,res)=>{
    let {username,password}=req.body;
    res.send(`Standard post request username : ${username} , password :${password} `);
})