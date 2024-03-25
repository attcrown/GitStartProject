"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.deleteItem = exports.getItemsByName = exports.createItem = exports.getAllItems = void 0;
const typeItemModel_1 = __importDefault(require("../models/typeItemModel"));
const sequelize_1 = require("sequelize");
const getAllItems = async (res) => {
    try {
        const items = await typeItemModel_1.default.findAll();
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.getAllItems = getAllItems;
const createItem = async (req, res) => {
    console.log(req.body);
    try {
        const { seq_no, name } = req.body;
        const newItem = await typeItemModel_1.default.create({ seq_no, name });
        res.status(201).json(newItem);
    }
    catch (error) {
        console.error('Error creating item', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createItem = createItem;
const getItemsByName = async (req, res) => {
    console.log(req.query);
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: 'Name parameter is required' });
        }
        const items = await typeItemModel_1.default.findAll({
            where: {
                name: {
                    [sequelize_1.Op.iLike]: `%${name}%`, // ใช้ Op.iLike เพื่อทำการค้นหา case-insensitive
                },
            },
        });
        res.json(items);
    }
    catch (error) {
        console.error('Error getting items by name', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getItemsByName = getItemsByName;
// รับคำขอ DELETE และลบข้อมูลตาม id ที่ระบุ
const deleteItem = async (req, res) => {
    console.log("delete", req.params);
    try {
        const { id } = req.params; // รับค่า id จาก URL parameter
        await typeItemModel_1.default.destroy({ where: { id } }); // ลบข้อมูลที่ตรงกับ id
        res.status(200).json({ message: 'Item deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting item', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.deleteItem = deleteItem;
//update
const updateItem = async (req, res) => {
    console.log("updateItem", req.params);
    try {
        const { id } = req.params; // รับค่า id จาก URL params
        const { seq_no, name, active } = req.body; // รับค่าข้อมูลที่ต้องการอัปเดต
        await typeItemModel_1.default.update({ seq_no, name, active }, { where: { id } });
        res.json({ message: 'Item update successfully' });
    }
    catch (error) {
        console.error('Error updating item', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateItem = updateItem;
