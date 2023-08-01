import { conection} from "../db.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res)=>{

    let {email, name, password} = req.body;
    let passwordHash = await bcrypt.hash(password, 10)

    conection.query ("INSERT INTO user (email,name,password) VALUES (?,?,?)", [email, name, passwordHash], (error) =>{

        if (error){
            return res.status (500).json(
            {"status" : "Register Invalid"}
        )}

        else{
            return res.status(200).json({
                "status" : "Register Congratulations"
            })
        }
    })
}
