const express = require('express');
const app = express();
const port = process.env.PORT||5000;

const cors=require('cors');

const chefs=require('./data/chefs.json');

app.use(cors())
 
app.get('/',(req,res)=>{
  res.send('server is running')
})

app.get('/chefs',(req,res)=>{
    res.send(chefs);
})

app.get('/chefs/:id',(req,res)=>{
   const id=req.params.id;
   const item = chefs.find(chef=>chef.id==id)
   res.send(item)
})

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`)
})