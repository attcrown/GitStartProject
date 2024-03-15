// models/typeItemModel.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../services/config';

class TypeItems extends Model { 
  public id!: number;
  public seq_no!: number;
  public name!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public active!: boolean;
}

TypeItems.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    seq_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'TypeItems',
    tableName: 'type_items',
    timestamps : true,
    paranoid : true, // ต้องการไม่ให้ลบข้อมูลจริง
    underscored : true, // กำหนดให้ Sequelize ใช้รูปแบบชื่อคอลัมน์ที่มีอักษรตัวเล็กและใช้ underscore (_) เป็นตัวต่อคำ.
    schema: 'myproject', // ระบุ schema ที่เก็บตาราง
  }
);

export default TypeItems;
