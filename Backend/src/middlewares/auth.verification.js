import { express } from 'express';
import {jwt} from "jsonwebtoken";
import passwordSecret from "../config";

export const verification = express.Router();

verification.use ((req, res, next)=>{

    let token = req.headers["authorization"];
    if (!token) {
    res.status(401).send ({
        error : "token required"
    });
    return;
}

if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
    console.log(token);
}

if (token) {
    jwt.verify(token, passwordSecret, (err, decoded)=>{
        if (err) {
        return res.json ({
            message : "Token Invalid"
        })
        }
        else {
            req.decoded = decoded;
            next();
        }
    })
    
}
})