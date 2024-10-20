const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3000;

const whileList = ["http://localhost:8000", "http://localhost:9000"];
const options = {
  origin: (origin, callback) => {
    if (origin.includes(origin)) {
      callback(null, origin)
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options));

//this line helps for get form-data in json format
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Inicio de la aplicación")
});

routerApi(app)

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port: ' + port);
});
