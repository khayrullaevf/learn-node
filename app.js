
// import readline from 'readline'
// import fs from 'fs'

const http = require('http')
const fs=require('fs')
const html =fs.readFileSync('./template/index.html', 'utf-8')
const productListhtml =fs.readFileSync('./template/product-list.html', 'utf-8')




const products=JSON.parse(fs.readFileSync('./data/product.json','utf-8'))

let productHtmlArray=products.map((prod)=>{
  let output=productListhtml.replace('{{%IMAGE%}}',prod.image)
  output=output.replace('{{%NAME%}}',prod.title)
  output=output.replace('{{%MODELNAME%}}',prod.category)
  output=output.repeat('${{%PRICE%}}', prod.price)
  
 return output

})


const server1=http.createServer((request,response)=>{
let path=request.url
if(path===''||path.toLowerCase()==='/home'){
    response.end(html.replace('{{%CONTENT%}}','You are in home page'))
}else if(path.toLowerCase()==='/about'){
    response.end( html.replace('{{%CONTENT%}}','You are in about page'))
}else if(path.toLowerCase()==='/contact'){
    response.end( html.replace('{{%CONTENT%}}','You are in contact page'))

}else if(path.toLowerCase()==='/products'){
    let result=html.replace('{{%CONTENT%}}',productHtmlArray.join(','))
    response.writeHead(200,{
        'Content-type':'text/html'
    })
    response.end(result)
}else{
    response.end( html.replace('{{%CONTENT%}}','ERROR 404'))
}
})


server1.listen(8000,'127.0.0.1',()=>{
    console.log('Server has been started');
})



















// fs.readFile('./files/input.txt','utf-8',(err,data)=>{
//     console.log(data);
//     // console.log(err);

//     fs.readFile(`./files/${data}.txt`, "utf-8", (err,dat)=>{
//         console.log(dat);
//         // console.log(err);
//         fs.writeFile('./files/output.txt','this is '+data, ()=>{
//             console.log('File written');
//         })
//     })
// })



// console.log('Say hello');










//Lecture=5-6*******************************

// let textIn=fs.readFileSync('./files/input.txt', 'utf-8')
// console.log(textIn);

// let content=`Data read from input.txt: ${textIn}  \nDate created  ${new Date()}`
// fs.writeFileSync('./files/output.txt',content)


// fs.readFile('./files/input.txt', 'utf-8',(err,data)=>{
//     console.log(data);
// })


// console.log('Hi');







//Lecture=4*******************************
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// rl.question('Please enter your name:',(name)=>{
//   console.log('You entered: '+name);
//   rl.close()
// })


// rl.on('close',()=>{
//     console.log('Interface closed');
//     process.exit()
// })