//import json-server library in index.js
const jsonServer=require('json-server')
//create server using json-server
const eventserver=jsonServer.create()
//create path to db.json file
const router=jsonServer.router('db.json')
//middlewares->js to json
const middleware=jsonServer.defaults()
//connect middleware and router in server
eventserver.use(middleware)
eventserver.use(router)
//setup port to server
const port=5000 || process.env.PORT
//to listen server for resolving request 
eventserver.listen(port,()=>{
    console.log(`eventserver started at ${port} and ready fetch request`);
})