const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Database synchronized successfully');
}).catch((error) => {
  console.error('Error synchronizing database:', error);
});

let router = require('./app/routers/productos.routers.js');

const cors = require('cors')
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
// Multer para manejo de imágenes
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Exponer carpeta uploads
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API Tienda La Colmenita" });
});
app.use('/', router);

// Create a Server
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})