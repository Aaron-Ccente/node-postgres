import { User } from "../models/User.js";

export class UserController{
    static async getAllUser(_, res){
        const response = await User.getAllUsers();
        if(!response.success){
            return res.status(500).json(response)
        }
        return res.status(200).json(response)
    }
}