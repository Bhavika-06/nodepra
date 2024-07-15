// import express from 'express'
// import mysql from 'mysql'
// import cors from 'cors'
import express from 'express';
import cors from 'cors';
import db from './connection.js';

const app = express();
app.use(cors());


// const app=express();
// app.use(cors());
// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root",
//     databse:'practice'
// });

//API to get data
app.get('/',(req,res)=>{
    const sql="SELECT * FROM student";
    db.query(sql,(err,result)=>{
        if (err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})

// app.listen(8081,()=>{
//     console.log("Listening");
// })






// // API to get data
// app.get('/', (req, res) => {
//     const sql = "SELECT * FROM student";
//     db.query(sql, (err, result) => {
//         if (err) 
//             return res.json({ Message: "Error inside server" });
//         return res.json(result);
//     })
// });

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
