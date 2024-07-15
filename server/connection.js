import mysql from 'mysql2'

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'practice'

});

db.connect((err) => {
    if(err){
        console.log("error in db connection : ", err);
    }
    else {
        console.log("db connected");
    }
})

let query = 'select * from student';
db.query(query, (err, results) => {
    if(err){
        console.log('error'+err);

    }
    else 
    {
        console.log('query executed')
    }
    console.log(results);
})

export default db ;

