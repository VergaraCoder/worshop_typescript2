import express,{Express} from 'express';
import router from './router/router.js';

const server:Express=express();

server.use(express.json());

server.use(express.urlencoded({extended:false}));

server.use(router);


server.listen(3001,()=>{
    console.log("We are in the port ",3001);
});
