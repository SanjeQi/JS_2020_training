const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  console.log(pathName);
  const id = url.parse(req.url, true).query.id;

  //PRODUCTS overview
  if (pathName === '/products' || pathName === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    fs.readFile(
      `${__dirname}/templates/template-overview.html`,
      'utf-8',
      (err, data) => {
        let overviewOutput = data;
        fs.readFile(
          `${__dirname}/templates/template-card.html`,
          'utf-8',
          (err, data) => {
            const cardOutput = laptopData
              .map((el) => replaceTemplate(data, el))
              .join('');

            overviewOutput = overviewOutput.replace('{%CARDS%}', cardOutput);
            res.end(overviewOutput);
          }
        );
      }
    );
  }
  // LAPTOP details
  else if (pathName === '/laptop' && id < laptopData.length) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    fs.readFile(
      `${__dirname}/templates/template-laptop.html`,
      'utf-8',
      (err, data) => {
        const laptop = laptopData[id];
        const output = replaceTemplate(data, laptop);

        res.end(output);
      }
    );
  }

  //IMAGES
  else if (/\.(jpg|jpeg|png|gif)$/i.test(pathName)) {
    fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
      res.writeHead(200, { 'Content-type': 'image/jpg' });
      res.end(data);
    });
  }
  // PRODUCT not found
  else {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('The page could not be found');
  }
});

server.listen(1337, '127.0.0.1', () => {
  console.log('Listening for requests now');
});

function replaceTemplate(originalHtml, laptop) {
  let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
  output = output.replace(/{%IMAGE%}/g, laptop.image);
  output = output.replace(/{%CPU%}/g, laptop.cpu);
  output = output.replace(/{%RAM%}/g, laptop.ram);
  output = output.replace(/{%STORAGE%}/g, laptop.storage);
  output = output.replace(/{%SCREEN%}/g, laptop.screen);
  output = output.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
  output = output.replace(/{%ID%}/g, laptop.id);
  return output;
}
