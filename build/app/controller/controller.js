var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { paciente, prescripcion } from '../models/models.js';
import { connection } from '../../config/db.js';
class managePaciente {
    static getPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente1 = new paciente(connection);
            try {
                const data = yield paciente1.getPacientes();
                res.json({
                    message: data
                });
            }
            catch (err) {
                res.json({
                    message: "HUbo un error"
                });
            }
        });
    }
    static getPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente1 = new paciente(connection);
            try {
                const id = parseInt(req.params.id);
                const data = yield paciente1.getPaciente(id);
                res.json({
                    message: data
                });
            }
            catch (err) {
                res.json({
                    message: "HUbo un error"
                });
            }
        });
    }
    static sendPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente1 = new paciente(connection);
            try {
                const data = yield paciente1.sendPaciente(req.body);
                res.json({
                    message: data
                });
            }
            catch (err) {
                res.json({
                    message: "HUbo un error"
                });
            }
        });
    }
}
class managePrescripcion {
    static getPrescripcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPres = new prescripcion(connection);
            try {
                const id = parseInt(req.params.id);
                const data = yield newPres.getPrescripciones(id);
                res.json({
                    message: data
                });
            }
            catch (err) {
                res.json({
                    message: "HUbo un error"
                });
            }
        });
    }
    static sendPrescripcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPres = new prescripcion(connection);
            try {
                const data = yield newPres.sendPrescripcion(req.body);
                res.json({
                    message: data
                });
            }
            catch (err) {
                console.log(err);
                res.json({
                    message: "HUbo un error"
                });
            }
        });
    }
}
export { managePaciente, managePrescripcion };
