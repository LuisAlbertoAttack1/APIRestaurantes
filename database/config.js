const mongoose = require("mongoose")
const dbConexion = async() => {

    try {

    await mongoose.connect(process.env.MONGOURI)
    console.log("se conecto a la API");

    } catch (error) {

    console.log(error);
      throw new Error("no se pudo conectar a la api")

    }

}
module.exports =dbConexion;