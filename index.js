
const express = require("express");

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
  res.send("welcome to this bby server")
})
app.get('/cute', (req,res,next)=>{
  res.send("isn't this so cute?")
})
//heroku injects the port number into the PORT env value
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
  
