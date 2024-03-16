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