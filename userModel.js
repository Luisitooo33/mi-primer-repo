const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        name: {
        type: String
    },
    apellido: {
     type:String
    },
    dni: {
        type:String
    }

    },
    {
        timestamps:true,
        versionKey:false,
    }    

)
   const ModelUser = mongoose.model("users", userSchema );
   module.exports = ModelUser;

