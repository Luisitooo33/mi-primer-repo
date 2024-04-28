const mongoose = require('mongoose');
const dbconnect = () => {
    
    mongoose.connect("mongodb://127.0.0.1:27017/user_Practico",{}, (err,res) => {})
    if (! err){
        console.log("Conexion Exitosa")

    }
    else{
        console.log("Error en la Conexion");
    }
} 

module.exports = dbconnect;