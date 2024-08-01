import routes from '../routes/routes.js';
import express ,{Express}from 'express';

const router:Express=express();

router.use("/hospital",routes);


export default router;