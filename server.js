const cors = require('cors');
const express = require('express');
const app = express();
const fs = require('node:fs');
const path = require("path");


app.use(express.json());

app.use(cors())

port = 3080;
app.listen(port, () => {
  console.log('Server listening on the port::'+ port)
});


//Ex1
app.get("/ex1", (req, res) => {
  const path_ex1 = "C:\\Users\\alexb\\OneDrive\\Escritorio\\UF1_ExamenAaD\\Imatges\\Imatge1.jpg";
  const readableStream = fs.createReadStream(path_ex1, { highWaterMark: 16384 });
  console.log(`${path.basename(path_ex1)}`);

  readableStream.on('data', (chunk) => {
      console.log(chunk);
    });

});


//Ex 2
app.get("/ex2", (req, res) => {
  const path_ex2 = "C:\\Users\\alexb\\OneDrive\\Escritorio\\UF1_ExamenAaD\\Imatges\\Imatge1.jpg";
  const readableStream = fs.createReadStream(path_ex2, { highWaterMark: 16384 });
  console.log(`${path.basename(path_ex2)}`);

  readableStream.on('error', (err) => {
    console.error("Al loro, no hay nada para leer!!!!");
  });

  readableStream.on('data', (chunk) => {
      console.log(chunk);
    });
});

app.get("/ex3", (req, res) => {
  const path_origen = "C:\\Users\\alexb\\OneDrive\\Escritorio\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt";
  const path_desti = "C:\\Users\\alexb\\OneDrive\\Escritorio\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt";

  const textOrigen = fs.readFileSync(path_origen, 'utf-8');

  if (fs.existsSync(path_desti)) {
    const contingutDesti = fs.readFileSync(path_desti, 'utf-8');
    fs.writeFileSync(path_desti, contingutDesti +'\n'+ textOrigen);
  } else {
    fs.writeFileSync(path_desti, textOrigen);
  }
  });


app.get("/ex4", (req, res) => {
  const path_carpeta = "C:\\Users\\alexb\\OneDrive\\Escritorio\\UF1_ExamenAaD";

  function leerCarpeta(directori) {

    const arxivos = fs.readdirSync(directori, 'utf-8');
    arxivos.forEach((arxivo) => {
      const ruta = directori + '/' + arxivo;
      const stats = fs.statSync(ruta);
      if (stats.isDirectory()) {
        console.log(ruta);
        leerCarpeta(ruta);
      } else {
        console.log(ruta);
      }
    });
  }
  console.log(path_carpeta)
  leerCarpeta(path_carpeta);
});
