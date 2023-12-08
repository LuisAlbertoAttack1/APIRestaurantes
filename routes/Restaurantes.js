const { Router } = require("express");
const { obtenerRestaurantes, obtenerRestaurantesPorId, agregarRestaurantes, actualizarResturantes, eliminarRestaurantes } = require("../controllers/restaurantes");
const router = Router();

router.get("/", obtenerRestaurantes)
router.get("/busqueda/:id", obtenerRestaurantesPorId)
router.post("/", agregarRestaurantes)
router.put("/:id", actualizarResturantes)
router.delete("/:id", eliminarRestaurantes)


module.exports = router;