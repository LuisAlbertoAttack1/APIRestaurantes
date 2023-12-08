const { model, Schema} = require("mongoose");
const RestaurantesSchema = new Schema({

    nombre: {
        type: String,
        require: true,
        unique: true
    },
    comida: {
        type: String,
        require: true
    },
    bebida: {
        type: String,
        require: true
    },
    postre: {
        type: String,
        require: true
    },
    tortillas: {
        type: String,
        require: true
    }
});
module.exports = model("Restaurantes", RestaurantesSchema)