//require
const express=require("express");
const path=require("path");
const fs=require("fs");
const port= process.env.PORT || 80;
const app=express();
//static
// app.use('../static', express.static('static'));
const static_path = path.join(__dirname, '../static');
app.use(express.static(static_path));
app.use(express.urlencoded());
//views
const home=fs.readFileSync("./view/index.html")
const contact=fs.readFileSync('./view/contact.html');
const service=fs.readFileSync('./view/service.html');
//end points
app.get('/', (req, res) => {
    res.end(home);
   })
   app.get('/contact', (req, res) => {
    res.end(contact);
   })
   app.get('/service', (req, res) => {
    res.end(service);
   })
 //listening port
 app.listen(port, () => {
     console.log(`Server is running on port ${port}`)
 })