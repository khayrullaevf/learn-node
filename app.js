
const http = require('http')
const fs=require('fs')
const url=require('url')




const html =fs.readFileSync('./template/index.html', 'utf-8')
let products=JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'))
let productListHmtl=fs.readFileSync('./template/product-list.html','utf-8')
let productDetailHmtl = fs.readFileSync("./template/product-details.html", "utf-8");

function replaceHtml(template,product){
  let output = template.replace("{{%IMAGE%}}", product.productuctImage);
  output = output.replace("{{%NAME%}}", product.name);
  output = output.replace("{{%MODELNAME%}}", product.modeName);
  output = output.replace("{{%MODELNO%}}", product.modelNumber);
  output = output.replace("{{%SIZE%}}", product.size);
  output = output.replace("{{%CAMERA%}}", product.camera);
  output = output.replace("${{%PRICE%}}", product.price);
  output = output.replace("{{%COLOR%}}", product.color);
  output = output.replace("{{%ID%}}", product.id);
  output = output.replace("{{%ROM%}}", product.ROM);
  output = output.replace("{{%DESC%}}", product.Description);
  return output;
}


const server1=http.createServer((request,response)=>{
let {query,pathname:path}=url.parse(request.url, true)
if(path==='/'||path.toLowerCase()==='/home'){
    response.writeHead(200,{
        'Content-type':'text/html'
    })
    response.end(html.replace('{{%CONTENT%}}','You are in home page'))
}else if(path.toLowerCase()==='/about'){
    
    response.writeHead(200,{
        'Content-type':'text/html'
    })
    response.end( html.replace('{{%CONTENT%}}','You are in about page'))
}else if(path.toLowerCase()==='/contact'){
    
    response.writeHead(200,{
        'Content-type':'text/html'
    })
    response.end( html.replace('{{%CONTENT%}}','You are in contact page'))

}

else if(path.toLowerCase()==='/products'){
    if(!query.id){
        let productsHtmlArray=products.map((prod)=>{
           return replaceHtml(productListHmtl,prod);
        })
        response.writeHead(200,{ 'Content-type':'text/html'})
        let productResponseHtml=html.replace('{{%CONTENT%}}',productsHtmlArray.join(','))
        response.end(productResponseHtml)
    
    }else{
        let prodi=products[query.id]
        let productDetailResponseHtml=replaceHtml(productDetailHmtl,prodi)
        console.log(productDetailResponseHtml);
        response.end(html.replace('{{%CONTENT%}}',productDetailResponseHtml))
    }
  
}else{
    response.writeHead(200,{
        'Content-type':'text/html'
    })
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