



//MODULES

const add=require('./add')

const sum=add(2,3)
console.log(sum);












































//CREATE A SERVER
// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 9000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World Hi');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// const { createServer } =require('node:http') ;

// const hostname='127.0.0.1'
// const port =8000

// const server=createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html')
//     res.end('Hello Fazliddin')
// })

// server.listen(port,hostname,()=>{
//     console.log(`Server is running at http://${hostname}:${port}`);
// })