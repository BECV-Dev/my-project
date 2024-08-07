const tareasService = require('../services/tareasService');

exports.createTarea = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const id = await tareasService.createTarea(titulo, descripcion);
    res.status(201).send({ id });
  } catch (error) {
    res.status(500).send({ error: 'Error creando tarea', details: error.message });
  }
};

exports.getTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await tareasService.getTarea(id);
    if (!tarea) {
      res.status(404).send({ error: 'Tarea no encontrada' });
    } else {
      res.send(tarea);
    }
  } catch (error) {
    res.status(500).send({ error: 'Error obteniendo tarea', details: error.message });
  }
};

// Actualizar Tarea
exports.updateTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const docRef = db.collection('tareas').doc(id);
    await docRef.update({
      titulo: titulo,
      descripcion: descripcion,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: 'Error actualizando tarea' });
  }
};