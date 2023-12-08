const Restaurantes = require("../models/Restaurantes");

const obtenerRestaurantes = async (req, res) => {

    try {

        const restaurantes = await Restaurantes.find({});
        if (restaurantes.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "no hay información de restaurantes en la api"

            })
        }
        return res.json({
            ok: true,
            msg: "información obtenida con exito",

            restaurantes: restaurantes
        })

    } catch (error) {

        res.status(500).json({
            ok:false,
            msg: "error en el servidor"

        })

    }

}

const obtenerRestaurantesPorId = async (req, res) => {

    try {

        const id = req.params.id;
        const restaurantes = await Restaurantes.findById(id);
        if (!restaurantes) {
            return res.status(404).json({
                ok:false,
                msg: "NO EXISTE NINGUN RESTAURANTE CON TAL ID"
            })
        }
        return res.json({
            ok: true,
            msg: "CONTENIDO DE INFORMACIÓN DE RESTAURANTES CON EXITO",
            restaurantes:restaurantes
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg: "ERROR EN EL SERVIDOR"
        })

    }

}

const agregarRestaurantes = async (req, res) => {
    
    try {

        const restaurantes = req.body 
        const nuevoRestaurantes = new Restaurantes(restaurantes)
        await nuevoRestaurantes.save()
        return res.json({
            ok: true,
            msg: "INFORMACIÓN DE RESTAURANTE AGREGADA CON EXITO",
            restaurantes: nuevoRestaurantes
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg: "ERROR EN EL SERVIDOR"
        })

    }
}

const actualizarResturantes = async (req, res) => {

    try {

        const id = req.params.id;
        const restaurantes = await Restaurantes.findById(id)
        if (!restaurantes) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY RESTAURANTES CON ESE ID"
                
            })
        }
        const restaurantesActualizado = await Restaurantes.findByIdAndUpdate(id, req.body)
        return res.json({
            ok: true,
            msg: "INFORMACIÓN DE RESTAURANTES ACTUALIZADO",
            restaurantes: restaurantesActualizado
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "ERROR EN EL SERVIDOR"
        })

    }

}

const eliminarRestaurantes = async (req, res) => {

    try {

        const id = req.params.id;
        const restaurantes = await Restaurantes.findById(id)
        if (!restaurantes) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY INFORMACIÓN DE RESTAURANTES CON ESE ID"
            })
        }
        const restaurantesEliminado = await Restaurantes.findByIdAndDelete(id)
        return res.json({
            ok: true,
            msg: "RESTAURANTES ELIMINADOS",
            restaurantes: restaurantesEliminado
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "ERROR EN EL SERVIDOR"
        })

    }
    
}

module.exports = {
    obtenerRestaurantes,
    obtenerRestaurantesPorId,
    agregarRestaurantes,
    actualizarResturantes,
    eliminarRestaurantes
}
