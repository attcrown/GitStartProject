// controller/detailUserController.ts
import { Request, Response } from 'express';
import DetailUser from '../models/detailUserModel';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await DetailUser.findAll();
        res.json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error detail user error' });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id }  = req.query;
        const user = await DetailUser.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error getting user', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const newUser = await DetailUser.create({ id });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user', error);
        res.status(500).json({ error: 'Internal server error create user' });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id ,first_name ,last_name ,nick_name ,birthday ,location ,prefix } = req.body;
        await DetailUser.update({ id ,first_name ,last_name ,nick_name ,birthday ,location ,prefix}, { where: { id } });
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user', error);
        res.status(500).json({ error: 'Internal server error update user' });
    }
}