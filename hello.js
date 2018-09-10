const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedUrl = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLocaleLowerCase();
    const queryStringObjects = parseUrl.query;

    const handle = routes[trimmedUrl] ? routes[trimmedUrl][method] : false;

    if(handle){
        handle[trimmedUrl](req, res, queryStringObjects);
    }else{
        res.end('');
    }
});


const routes = {
    'sample':{
        'get': (req, res, query) => {
            console.log("queryStringObjects", query);
            res.setHeader('Content-Type','application/json');
            res.write
            const data = JSON.stringify({
                name: 'Frany,',
                age: 29,
                lastname: query.lastname,
            });

            res.writeHead(200);
            res.end(data);
        },
        'post': (req, res) => res.end('we did post it ;)')
    },
    'cart': (req, res) =>{
        res.end('you have no cart :P');        
    }
}

server.listen(PORT, ()=> console.log('server listening in port'+ PORT));