import { db } from "../db.js"

export const getRest = (req,res)=>{
    const q = "SELECT * FROM restaurant WHERE name = ?";

    db.query(q, [req.body.name], (err,data)=>{
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
};