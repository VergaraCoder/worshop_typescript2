import {paciente,prescripcion} from '../models/models.js';
import {Response,Request} from 'express';
import {connection} from '../../config/db.js';
import {RowDataPacket} from 'mysql2/promise';

class managePaciente{
    static async getPacientes(req:Request,res:Response){
        const paciente1:paciente=new paciente(connection);
        try{
            const data:RowDataPacket[]=await paciente1.getPacientes();
            res.json({
                message:data
            });
        }catch(err:unknown){
            res.json({
                message:"HUbo un error"
            }); 
        }
    }

    static async getPaciente(req:Request,res:Response){
        const paciente1:paciente=new paciente(connection);
        try{
            const id:number=parseInt(req.params.id);
            const data:RowDataPacket=await paciente1.getPaciente(id);
            res.json({
                message:data
            });
        }catch(err:unknown){
            res.json({
                message:"HUbo un error"
            }); 
        }
    }

    static async sendPaciente(req:Request,res:Response){
        const paciente1:paciente=new paciente(connection);
        try{
            const data:RowDataPacket[]=await paciente1.sendPaciente(req.body);
            res.json({
                message:data
            });
        }catch(err:unknown){
            res.json({
                message:"HUbo un error"
            }); 
        }
    }
}

class managePrescripcion{
    static async getPrescripcion(req:Request,res:Response){
        const newPres:prescripcion=new prescripcion(connection);
        try{
            const id:number=parseInt(req.params.id);
            const data:RowDataPacket[]=await newPres.getPrescripciones(id);
            res.json({
                message:data
            });
        }catch(err:unknown){
            res.json({
                message:"HUbo un error"
            }); 
        }
    }

    static async sendPrescripcion(req:Request,res:Response){
        const newPres:prescripcion=new prescripcion(connection);
        try{            
            const data:RowDataPacket[]=await newPres.sendPrescripcion(req.body);
            
            res.json({
                message:data
            });
        }catch(err:unknown){
            console.log(err);
            
            res.json({
                message:"HUbo un error"
            }); 
        }
    }
}


export {managePaciente,managePrescripcion};