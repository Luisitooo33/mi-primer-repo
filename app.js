const express = require ('express');
const dbconnect = require('./config');
const app = express ();

const router = express.Router();




router.post("/",(req,res) => {
   const body  = req.body;
   res.send(body)

})

router.get("/",(req,res)=>{ 
   res.send("hola soy luis es mi primer get ")
})

app.use( express.json())
app.use(router)
app.listen(3000,() => {
    console.log('servidor a la espera de conexion');
})

dbconnect();
