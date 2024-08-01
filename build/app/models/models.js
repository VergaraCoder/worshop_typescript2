var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class baseModel {
    constructor(conexion) {
        this.db = conexion;
    }
    getConection() {
        return this.db;
    }
}
class paciente extends baseModel {
    constructor(connection) {
        super(connection);
    }
    getPacientes() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = this.getConection();
            const [query] = yield pool.query(`SELECT * FROM paciente`);
            console.log(query);
            return query;
        });
    }
    getPaciente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = this.getConection();
            const [[query]] = yield pool.query(`SELECT * FROM paciente WHERE id=?`, [id]);
            return query;
        });
    }
    sendPaciente(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            const pool = this.getConection();
            console.log("entramos a prescripcione");
            const [query] = yield pool.query(`INSERT INTO paciente (nombre,edad,hostorialMedico) values(?,?,?)`, [data.nombre, data.edad, data.hostorialMedico]);
            const [query2] = yield pool.query(`SELECT * FROM paciente WHERE id=?`, [query.insertId]);
            return query2;
        });
    }
}
class prescripcion extends baseModel {
    constructor(conexion) {
        super(conexion);
    }
    getPrescripciones(idPaciente) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = this.getConection();
            const [query] = yield pool.query(`SELECT * FROM prescripcion WHERE id_paciente=?`, [idPaciente]);
            return query;
        });
    }
    sendPrescripcion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = this.getConection();
            const [query] = yield pool.query(`INSERT INTO prescripcion (nombre,dosis,frecuencia,duracion,id_paciente) values(?,?,?,?,?)`, [data.nombre, data.dosis, data.frecuencia, data.duracion, data.id_paciente]);
            const [query2] = yield pool.query(`SELECT * FROM prescripcion WHERE medicamentoId=?`, [query.insertId]);
            return query2;
        });
    }
}
export { paciente, prescripcion };
