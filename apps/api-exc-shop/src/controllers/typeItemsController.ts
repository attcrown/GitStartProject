// controllers/itemController.ts
import { Request, Response } from 'express';
import TypeItems from '../models/typeItemModel';
import { Op } from 'sequelize';

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await TypeItems.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createItem = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const {seq_no, name } = req.body;
    const newItem = await TypeItems.create({seq_no, name });
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getItemsByName = async (req: Request, res: Response) => {
  console.log(req.query)
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ error: 'Name parameter is required' });
    }
    const items = await TypeItems.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`, // ใช้ Op.iLike เพื่อทำการค้นหา case-insensitive
        },
      },
    });
    res.json(items);
  } catch (error) {
    console.error('Error getting items by name', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// รับคำขอ DELETE และลบข้อมูลตาม id ที่ระบุ
export const deleteItem = async (req: Request, res: Response) => {
  console.log("delete" ,req.params)
  try {
    const { id } = req.params; // รับค่า id จาก URL parameter
    await TypeItems.destroy({ where: { id } }); // ลบข้อมูลที่ตรงกับ id
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//update
export const updateItem = async (req: Request, res: Response) => {
  console.log("updateItem" ,req.params)
  try {
    const { id } = req.params; // รับค่า id จาก URL params
    const { seq_no, name, active } = req.body; // รับค่าข้อมูลที่ต้องการอัปเดต
    await TypeItems.update({ seq_no, name, active }, { where: { id } });
    res.json({ message: 'Item update successfully' });
  } catch (error) {
    console.error('Error updating item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


