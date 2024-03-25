"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.pool = exports.db = exports.appfirebase = void 0;
// firebase
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
const pg_1 = require("pg");
const sequelize_1 = require("sequelize");
const firebaseConfig = {
    apiKey: "AIzaSyBCuqdFQ2p8c-l7B2_aUgAxAIFI4FS76tI",
    authDomain: "goshop-9e571.firebaseapp.com",
    databaseURL: "https://goshop-9e571-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "goshop-9e571",
    storageBucket: "goshop-9e571.appspot.com",
    messagingSenderId: "895114201754",
    appId: "1:895114201754:web:ce1eed14ad14b377ad2d23",
    measurementId: "G-PX5QWDYQE7",
};
const appfirebase = (0, app_1.initializeApp)(firebaseConfig);
exports.appfirebase = appfirebase;
const db = (0, database_1.getDatabase)(appfirebase);
exports.db = db;
// postgres
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "",
    port: 5432,
});
exports.pool = pool;
// Sequelize postgres
const sequelize = new sequelize_1.Sequelize("postgres", "postgres", "", {
    host: "localhost",
    dialect: "postgres",
});
exports.sequelize = sequelize;
