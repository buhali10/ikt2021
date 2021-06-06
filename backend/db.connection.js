import mysql from 'mysql';
import { dbConfig } from './db.config.js';

export const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

connection.connect((error) => {
    if (error) throw error;
    console.log("Connected with database ... ");
});
