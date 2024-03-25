"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../services/config");
class DetailUser extends sequelize_1.Model {
}
DetailUser.init({
    id: {
        type: sequelize_1.DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
    },
    prefix: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    nick_name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    birthday: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    location: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    sequelize: config_1.sequelize,
    modelName: "DetailUser",
    tableName: "detail_user",
    timestamps: true,
    paranoid: true, // ต้องการไม่ให้ลบข้อมูลจริง
    underscored: true, // กำหนดให้ Sequelize ใช้รูปแบบชื่อคอลัมน์ที่มีอักษรตัวเล็กและใช้ underscore (_) เป็นตัวต่อคำ.
    schema: 'myproject', // ระบุ schema ที่เก็บตาราง
});
exports.default = DetailUser;
