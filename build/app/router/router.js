import routes from '../routes/routes.js';
import express from 'express';
const router = express();
router.use("/hospital", routes);
export default router;
