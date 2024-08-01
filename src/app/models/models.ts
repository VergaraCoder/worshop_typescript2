import {Pool} from '../../config/db.js';
import {RowDataPacket} from 'mysql2/promise';


interface base{
    nombre:string,
    edad:number,
    hostorialMedico:string
}

interface prescripcion{
    nombre:string,
    dosis:string,
    frecuencia:string,
    duracion:string,
    id_paciente:number
}

class baseModel{
    private db:Pool   
    constructor(conexion:Pool){
        this.db=conexion;
    }

    getConection():Pool{
        return this.db;
    }
}

class paciente extends baseModel{
    constructor(connection:Pool){
        super(connection);
    }

    async getPacientes():Promise<RowDataPacket[]>{
        const pool:Pool=this.getConection();
        const [query]=await pool.query<RowDataPacket[]>(`SELECT * FROM paciente`);
        console.log(query);
        
        return query;
    }

    async getPaciente(id:number):Promise<RowDataPacket>{
        const pool:Pool=this.getConection();
        const [[query]]=await pool.query<RowDataPacket[]>(`SELECT * FROM paciente WHERE id=?`,[id]);
        return query;
    }

    async sendPaciente(data:base):Promise<RowDataPacket[]>{
        console.log(data);
        
        const pool:Pool=this.getConection();
        console.log("entramos a prescripcione");
        
        const [query]=await pool.query<RowDataPacket[]>(`INSERT INTO paciente (nombre,edad,hostorialMedico) values(?,?,?)`,[data.nombre,data.edad,data.hostorialMedico]);

        const [query2]=await pool.query<RowDataPacket[]>(`SELECT * FROM paciente WHERE id=?`,[query.insertId]);

        return query2;
    }
}

class prescripcion extends baseModel{
    constructor(conexion:Pool){
        super(conexion);
    }

    async getPrescripciones(idPaciente:number):Promise<RowDataPacket[]>{
        const pool:Pool=this.getConection();
        const [query]=await pool.query<RowDataPacket[]>(`SELECT * FROM prescripcion WHERE id_paciente=?`,[idPaciente]);
        return query;
    }

    async sendPrescripcion(data:prescripcion){
        const pool:Pool=this.getConection();
        const [query]=await pool.query<RowDataPacket[]>(`INSERT INTO prescripcion (nombre,dosis,frecuencia,duracion,id_paciente) values(?,?,?,?,?)`,[data.nombre,data.dosis,data.frecuencia,data.duracion,data.id_paciente]);
         
        const [query2]=await pool.query<RowDataPacket[]>(`SELECT * FROM prescripcion WHERE medicamentoId=?`,[query.insertId]);
        return query2;
    }
}


export {paciente,prescripcion};