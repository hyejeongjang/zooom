import express from "express";

const app=express();

app.set("view engine", "pug");
app.set("views", __dirname+"/views");
app.use("/public", express.static(__dirname="/public")); // 뷰에서 public 경로로 찾아갈 수 있음
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);