import { Model, DataTypes } from "sequelize";
import { sequelize } from "../services/config";

class DetailUser extends Model {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public date!: Date;
    public created_at!: Date;
    public updated_at!: Date;
}

DetailUser.init(
    {
        id: {
            type: DataTypes.STRING(100),
            primaryKey: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "DetailUser",
        tableName: "detail_user",
        timestamps: true,
        paranoid : true, // ต้องการไม่ให้ลบข้อมูลจริง
        underscored : true, // กำหนดให้ Sequelize ใช้รูปแบบชื่อคอลัมน์ที่มีอักษรตัวเล็กและใช้ underscore (_) เป็นตัวต่อคำ.
        schema: 'myproject', // ระบุ schema ที่เก็บตาราง
    }
)

export default DetailUser;