const admin = require('../src/config/firebase');
const db = admin.firestore();

exports.TestConnection = async (req, res) => {
    try {
      const collections = await db.listCollections();
      res.status(200).send(collections.map(col => col.id));
    } catch (error) {
      console.error("Error accediendo a Firestore:", error);
      res.status(500).send({ error: 'Error accediendo a Firestore', details: error.message });
    }
  };
  
  // Crear Tarea
  exports.createTarea = async (titulo, descripcion) => {
    try {
      const docRef = await db.collection('tareas').add({
        titulo,
        descripcion,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      throw new Error('Error creando tarea: ' + error.message);
    }
  };
  
  // Obtener Tarea
  exports.getTarea = async (id) => {
    try {
      const doc = await db.collection('tareas').doc(id).get();
      if (!doc.exists) {
        return null;
      }
      return doc.data();
    } catch (error) {
      throw new Error('Error obteniendo tarea: ' + error.message);
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
  
  // Eliminar Tarea
  exports.deleteTarea = async (req, res) => {
    try {
      const { id } = req.params;
      await db.collection('tareas').doc(id).delete();
      res.send({ success: true });
    } catch (error) {
      res.status(500).send({ error: 'Error eliminando tarea' });
    }
  };
  