import { createPool } from 'mysql2/promise';
const connection = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rlwl2023.",
    database: "hospital"
});
console.log("conectado correctamenete");
export { connection };
