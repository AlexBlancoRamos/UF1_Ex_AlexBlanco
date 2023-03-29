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
app.get('/ex1', (req, res) => {
  const path_ex1 = "C:\\Users\\alexb\\OneDrive\\Escritorio\\UF1_ExamenAaD\\Imatges\\Imatge1.jpg";
  const readableStream = fs.createReadStream(path_ex1, { highWaterMark: 16384 });
  console.log(`${path.basename(path_ex1)}`);
  readableStream.on('data', (chunk) => {
      console.log(chunk);
    }
  );

});

//Ex 2

app.get('/ex2', (req, res) => {
  const path_ex1 = "C:\\Users\\alexb\\OneDrive\\Escritorio\\UF1_ExamenAaD\\Imatges\\Imatge1.jpg";
  const readableStream = fs.createReadStream(path_ex1, { highWaterMark: 16384 });
  console.log(`${path.basename(path_ex1)}`);

  readableStream.on('error', (err) => {
    console.error("Al loro, no hi ha res per llegir!!!!");
  });

  readableStream.on('data', (chunk) => {
      console.log(chunk);
    }
  );

});



