const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Alejandro'
    // };

    // res.write(JSON.stringify(persona));

    res.write('hola');
    res.end();

})
.listen(8888);

console.log('Escuchando el puerto', 8888);





