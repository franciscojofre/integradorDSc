const dataScience = require('../data/science');
const info = dataScience.lista;

const mainController = {
    bienvenida: function (req, res) {
        res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.')
    },
    creditos: function(req, res){
        return res.send('Este trabajo fue realizado por Octavio, Valentin y Francisco, estudiantes de la Licenciatura de Negocios Digitales de la Universidad de San Andres y Digital House.')
    }
}

module.exports = mainController;