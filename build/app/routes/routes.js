import { Router } from "express";
import { managePaciente, managePrescripcion } from '../controller/controller.js';
const routes = Router();
routes.get("/paciente", managePaciente.getPacientes);
routes.get("/paciente/:id", managePaciente.getPaciente);
routes.post("/paciente", managePaciente.sendPaciente);
routes.post("/prescripcion", managePrescripcion.sendPrescripcion);
export default routes;
