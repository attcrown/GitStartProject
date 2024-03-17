import { Model, DataTypes } from "sequelize";
import { sequelize } from "../services/config";

class DetailUser extends Model {
    public id!: string;
    public prefix!: string;
    public first_name!: string;
    public last_name!: string;
    public nick_name!: string;
    public birthday!: Date;
    public location!: string;
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
        prefix:{
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        nick_name:{
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING(255),
            allowNull: true,
        }
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