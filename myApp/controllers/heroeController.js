const dataScience = require('../data/science');
const info = dataScience.lista;

const heroeController = {
    info: function (req, res) {
        return res.send(info)
    },
    detalle: function (req, res) {
        let respuestaDetalle = '';
        for (let i = 0; i < info.length; i++) {
            if (req.params.id == info[i].id) {
                respuestaDetalle = 'Hola, mi nombre es ' + info[i].nombre + ' y soy ' + info[i].profesion;
            }
            if (req.params.id > info.length) {
                respuestaDetalle = 'No encontramos al científico indicado. Por favor, elija otro id.'
            }
        }
        return res.send(respuestaDetalle)
    },
    masDetalle: function (req, res) {
        let respuestaMasDetalle = '';
        for (let i = 0; i < info.length; i++) {
            if (req.params.id > info.length) {
                respuestaMasDetalle = 'No encontramos al científico indicado para mostrar su biografía.'
            }
            if (req.params.id == info[i].id && req.params.ok == null) {
                respuestaMasDetalle = 'Hola, mi nombre es ' + info[i].nombre + ' y lamento que no quieras saber mas de mi :( ';
            }
            if (req.params.id == info[i].id && req.params.ok == 'ok') {
                respuestaMasDetalle = 'Hola, mi nombre es ' + info[i].nombre + ' ' + info[i].resenia;
            }
        }
        return res.send(respuestaMasDetalle)
    }
}

module.exports = heroeController;