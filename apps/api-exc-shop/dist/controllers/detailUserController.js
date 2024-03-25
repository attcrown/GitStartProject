"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const detailUserModel_1 = __importDefault(require("../models/detailUserModel"));
const getAllUsers = async (res) => {
    try {
        const users = await detailUserModel_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error detail user error' });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const { id } = req.query;
        const user = await detailUserModel_1.default.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        console.error('Error getting user', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        const { id } = req.body;
        const newUser = await detailUserModel_1.default.create({ id });
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error('Error creating user', error);
        res.status(500).json({ error: 'Internal server error create user' });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const { id, first_name, last_name, nick_name, birthday, location, prefix } = req.body;
        await detailUserModel_1.default.update({ id, first_name, last_name, nick_name, birthday, location, prefix }, { where: { id } });
        res.status(200).json({ message: 'User updated successfully' });
    }
    catch (error) {
        console.error('Error updating user', error);
        res.status(500).json({ error: 'Internal server error update user' });
    }
};
exports.updateUser = updateUser;
