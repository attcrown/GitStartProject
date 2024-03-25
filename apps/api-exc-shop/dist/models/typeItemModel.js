"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/typeItemModel.ts
const sequelize_1 = require("sequelize");
const config_1 = require("../services/config");
class TypeItems extends sequelize_1.Model {
}
TypeItems.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    seq_no: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    }
}, {
    sequelize: config_1.sequelize,
    modelName: 'TypeItems',
    tableName: 'type_items',
    timestamps: true,
    paranoid: true, // ต้องการไม่ให้ลบข้อมูลจริง
    underscored: true, // กำหนดให้ Sequelize ใช้รูปแบบชื่อคอลัมน์ที่มีอักษรตัวเล็กและใช้ underscore (_) เป็นตัวต่อคำ.
    schema: 'myproject', // ระบุ schema ที่เก็บตาราง
});
exports.default = TypeItems;
