// controller/detailUserController.ts
import { Request, Response } from 'express';
import DetailUser from '../models/detailUserModel';
import { Op } from 'sequelize';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await DetailUser.findAll();
        res.json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error detail user error' });
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { id, prefix, first_name, last_name, nick_name, birthday, location } = req.body;
        const newUser = await DetailUser.create({ id, prefix, first_name, last_name, nick_name, birthday, location });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user', error);
        res.status(500).json({ error: 'Internal server error create user' });
    }
}